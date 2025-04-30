import { NextResponse } from "next/server";
import { cookies } from 'next/headers';
import { createClient } from "../../utils/supabase/server";

export async function POST(request: Request) {
    
    let supabase;
    try {
        const cookieStore = cookies();
        supabase = createClient(cookieStore);
    } catch (error) {
        return NextResponse.json(
            { success: false, message: 'Error initializing Supabase client.' },
            { status: 500 }
        );
    }


    try {
        const { username, password } = await request.json();

        let { data: users, error } = await supabase
            .from('users')
            .select('*')

            console.log("test :",users)
        
        if (error) {
            return NextResponse.json(
                { success: false, message: error.message },
                { status: 500 }
            );
        }

        if (users === null) {
            return NextResponse.json(
                { success: false, error: 'No users found in the database.' },
                { status: 500 }
            );
        }

        const matchedUser = users.find((user:any) => user.username === username);

        if(matchedUser && matchedUser.password === password) {
            // Create response
            const response = NextResponse.json(
                { 
                    success: true, 
                    message: 'Login successful',
                    data: matchedUser
                },
                { status: 200 }
            );

            // Set session cookie
            response.cookies.set('session', JSON.stringify({
                username: matchedUser.username,
                loggedIn: true,
                timestamp: Date.now()
            }), {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
                maxAge: 60 * 60 * 1, // 24 hours
                path: '/'
            });

            return response;
        } else {
            return NextResponse.json(
                { success: false, message: 'Invalid credentials' },
                { status: 401 }
            );
        }

    } catch (error: any) {
        console.error('[API /api/login] Error processing login request:', error);
        return NextResponse.json(
            { success: false, message: 'Internal server error' },
            { status: 500 }
        );
    }
}
