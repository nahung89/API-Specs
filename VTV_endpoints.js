// GET /v5.0/vtvChannels/{vtv_channel_id}/now
// Requires signed in
Response = {
    "programs": [
        {
            // Previous program...
        },
        {
            "id": 123456789,
            "vtv_channel_id": 3456789012,
            "title": "Hearts Don't Break Around Here",
            "tag": "EDM",
            "tag_color": "998822FF", // RGBA Hex
            "start_at": 1507904400000, // Milliseconds from Epoch
            "end_at": 1507909800000, // Milliseconds from Epoch
            "content_type": "collection",
            "source_id": 5678901234, // Related to "content_type"
            "vj": {
                "id": 7890123456,
                "full_name": "Cameron Wansley",
                "username": "camjameson",
                "profile_photo": {
                    "uri": "https://berserker3.vibbidi-vid.com/vibbidi-us/pictures/avatars/884794825109090.jpg"
                }
            },
            "description": "In Disposable Macus Houses. These Zoopanktoo Filter the Ocean",
            "videos": [
                {
                    // Previous video...
                },
                {
                    "id": 6789012345,
                    "title": "Always On Your Side",
                    "artist": "Sheryl Crow",
                    "cover_image": {
                        "uri": "https://berserker4.vibbidi-vid.com/vibbidi/videos/video___KPCJV-o5BWA.mp4.bgcover.jpg"
                    },
                    "uri": "https://berserker4.vibbidi-vid.com/vibbidi/videos/video___KPCJV-o5BWA.mp4",
                    "duration": 147.05,
                    "mime_type": "video/mp4",
                    "width": 320,
                    "height": 240,
                    "size": 3594662,
                    "integrated_loudness": -12.8,
                    "player_audio_volume": 0.6918309709189365,
                    "start_point": 0.0, // Based on "duration"
                    "end_point": 147.05, // Based on "duration"
                    "start_at": 1507908007000, // Milliseconds from Epoch
                    "end_at": 1507908154050, // Milliseconds from Epoch
                },
                {
                    // Next video...
                }
            ]
        },
        {
            // Next program...
        }
    ],
    "n_watching": 11275,
    "friends": [
        {
            "id": 7890123456,
            "full_name": "Cameron Wansley",
            "username": "camjameson",
            "profile_photo": {
                "uri": "https://berserker3.vibbidi-vid.com/vibbidi-us/pictures/avatars/884794825109090.jpg"
            }
        },
        {
            // Other friends...
        }
    ]
}

// GET /v5.0/vtvChannels/{vtv_channel_id}/onlineUsers?onlyFriends=0&start_point=0&items_to_get=20
// Requires signed in
// Query param: onlyFriends = 0 (all users) or = 1 (only friends)
Response = {
    "users": [
        {
            "id": 7890123456,
            "full_name": "Cameron Wansley",
            "username": "camjameson",
            "profile_photo": {
                "uri": "https://berserker3.vibbidi-vid.com/vibbidi-us/pictures/avatars/884794825109090.jpg"
            }
        },
        {
            // Other users...
        }
    ],
    "scrolling": {
      "start_point": 0,
      "items": 18
    }
}

// POST /v5.0/vtvChannels/{vtv_channel_id}/comments
// Requires signed in
// Form/JSON params:
// "message": text, at most 128 characters, no new-line
Response = {
    "success": true
}

// -----------------------
// Connect to WebSocket:
// Dial to /v4.1/webSocket, e.g. ws://v4-api.vibbidi.com:8018/v4.1/webSocket
// To authorize using request header, make sure there is Authorization field (BEARER xxx)
// Be ready to receive JSON messages in raw text from WebSocket

// Authorize using WebSocket, only when client hasn't authorized using header, client sends token ASAP
Payload = {
    "seq": 1,
    "action": "authentication_challenge",
    "data": {
    "token": "xxx" // Only token, no "BEARER"
}
}
// If token is OK, client will receive
Event = {
    "status": "OK",
    "seq_reply": 1
}
// If token isn't OK, there is no reply, WebSocket connection will close ASAP. To check connection health, see "ping" below.
// 1: Send
{
  "action": "ping",
  "seq": 334
}
// 1: Receive
{
  "status": "OK", // OK or FAIL
  "seq_reply": 334, // Match client sequence
  "data": { // This field depends on action type, sometime "data" is omitted
    "server_time": 1493136693404,
    "text": "pong",
    "version": "4.1.1"
  }
}

// On WebSocket
// When there is a new comment
Event = {
    "event": "vtv_comment_posted",
    "data": {
        "vtv_channel_id": 123456789,
        "comment_id": 3456789012,
        "message": "What the hell... :goberserk:", // emoji name is wrapped in colons
        "importance": 1045.4, // 64-bit float, higher is more important
        "sent_at": 1507908024000, // Milliseconds from Epoch
        "size": 1.0, // 1.0 = 100%
        "color": "", // Empty means default, otherwise RGBA Hex
        "direction": 180.0, // Zero: Left to right, 90: bottom to top, 180: right to left, 270: top to bottom,...
        "duration": 3.5, // The duration which it appears on screen
        "avatar_uri": "https://berserker3.vibbidi-vid.com/vibbidi-us/pictures/avatars/884794825109090.jpg"
    },
    "sequence": 2345 // Server sequence (differentiate events), integer, 0 <= x < 2^63
}