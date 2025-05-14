import { RealtimeChat } from '@/components/realtime-chat'
import React from 'react'

export default function page() {
  return (
    <div>
      Message Page
      <RealtimeChat roomName="my-chat-room" username="john_doe" />
    </div>
  )
}
