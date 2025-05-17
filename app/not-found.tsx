import { Button } from "@/components/ui/button";

// app/not-found.tsx
export default function NotFound() {
  return (
    <div className="flex flex-col px-10 py-10">
      <div className="flex justify-end">
        <Button>
          <a href="/">Go Dashboard</a>
        </Button>
      </div>
      <div className="flex flex-col justify-center items-center text-center align-middle">
        <h1>Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
      </div>
    </div>
  );
}
