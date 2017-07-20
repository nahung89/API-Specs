// GET /v4.1/artists/{artist_id}
// Requires signed in
//		-> add `locked` for artist
Response = {
    "id": 856617341290,
    "name": "The Chainsmokers",
    "bio": "",
    "locked": false, // ~~> add `locked` for artist 
    "live_videos": [/* ... */],
    "special": [
        {
            "id": 564594122172049,
            "title": "By the Way World Tour 2003 at Slane Castle in Ireland",
            "locked": false,
            "cover_image": {
                "uri": "https://berserker1.vibbidi-vid.com/vibbidi/videos/video___4u6bWs-ZG0o___csju58en5nnseewtocu8ansdbo.mp4.bgcover.jpg"
            },
            "duration": 7982.6,
        },
        {
            "id": 264594122172045,
            "title": "Roll on the Red Tour 2004 at Hyde Park in England",
            "locked": false,
            "cover_image": {
                "uri": "https://berserker1.vibbidi-vid.com/vibbidi/videos/video___4u6bWs-ZG0o___csju58en5nnseewtocu8ansdbo.mp4.bgcover.jpg"
            },
            "duration": 7382.9,
        }
        /* ... */
    ]
}

// GET /v4.1/artists/{artist_id}/special
// Requires signed in
Response = {
    "special": [
        {
            "id": 264594122172045,
            "title": "Roll on the Red Tour 2004 at Hyde Park in England",
            "locked": true,
            "cover_image": {
                "uri": "https://berserker1.vibbidi-vid.com/vibbidi/videos/video___4u6bWs-ZG0o___csju58en5nnseewtocu8ansdbo.mp4.bgcover.jpg"
            },
            "duration": 7382.9,
            "artist_id": 499273824010207,
            "creator": "Charli XCX",
            "artists": [
                {
                    "id": 499273824010207,
                    "name": "Charli XCX",
                    "bio": "",
                    "description": "",
                    "locked": true, // ~~> add `locked` for artist 
                    "square_image": {
                        "height": 640,
                        "mime_type": "image/jpeg",
                        "uri": "https://i.scdn.co/image/532d7d184c3a8887932a29f4fb29fb4ff4665b40",
                        "width": 640
                    }
                }
            ]
        },
        {
            "id": 264594122172045,
            "title": "Roll on the Red Tour 2004 at Hyde Park in England",
            "locked": false,
            "cover_image": {
                "uri": "https://berserker1.vibbidi-vid.com/vibbidi/videos/video___4u6bWs-ZG0o___csju58en5nnseewtocu8ansdbo.mp4.bgcover.jpg"
            },
            "duration": 7382.9,
            "artist_id": 499273824010207,
            "creator": "Charli XCX",
            "artists": [
                {
                    "id": 499273824010207,
                    "name": "Charli XCX",
                    "bio": "",
                    "description": "",
                    "square_image": {
                        "height": 640,
                        "mime_type": "image/jpeg",
                        "uri": "https://i.scdn.co/image/532d7d184c3a8887932a29f4fb29fb4ff4665b40",
                        "width": 640
                    }
                }
            ]
        }
        /* ... */
    ],
    "scrolling": {
        "start_point": 0,
        "items": 20
    }
}

// GET /v4.1/users/{user_id}/albumsSpecial
// Requires signed in
Response = {
    "content": [
        {
            "type": "special",
            "special": {
                "id": 264594122172045,
                "title": "Roll on the Red Tour 2004 at Hyde Park in England",
                "locked": true,
                "cover_image": {
                    "uri": "https://berserker1.vibbidi-vid.com/vibbidi/videos/video___4u6bWs-ZG0o___csju58en5nnseewtocu8ansdbo.mp4.bgcover.jpg"
                },
                "duration": 7382.9,
                "artist_id": 499273824010207,
                "creator": "Charli XCX",
                "artists": [
                    {
                        "id": 499273824010207,
                        "name": "Charli XCX",
                        "bio": "",
                        "description": "",
                        "square_image": {
                            "height": 640,
                            "mime_type": "image/jpeg",
                            "uri": "https://i.scdn.co/image/532d7d184c3a8887932a29f4fb29fb4ff4665b40",
                            "width": 640
                        }
                    }
                ]
            }
        },
        {
            "type": "album",
            "album": {
                /* ... */
            }
        }
        /* ... */
    ],
    "scrolling": {
        "start_point": 0,
        "items": 20
    }
}


// POST /v4.1/artists/{artist_id}/unlockSpecial
// Requires signed in
Response =
    {
        "success": true
    }


// GET /v4.1/special/{special_id}
// Requires signed in
// 		-> in design we have 
Error_when_Locked = {
    "error": {
        "id": "api.forbidden.app_error",
        "message": "The user is not allowed to perform the operation",
        "detailed_error": "special_id=805515888261252",
        "vtrace_id": "e31ehtzuunnq9fu15z1y1k5xab",
        "status_code": 403
    }
}

Response = {
    "id": 264594122172045,
    "title": "Roll on the Red Tour 2004 at Hyde Park in England",
    "cover_image": {
        "uri": "https://berserker1.vibbidi-vid.com/vibbidi/videos/video___4u6bWs-ZG0o___csju58en5nnseewtocu8ansdbo.mp4.bgcover.jpg"
    },
    "duration": 7382.9,
    "mime_type": "video/mp4",
    "artist_id": 499273824010207,
    "creator": "Charli XCX",
    "artists": [
        {
            "id": 499273824010207,
            "name": "Charli XCX",
            "bio": "",
            "description": "",
            "square_image": {
                "height": 640,
                "mime_type": "image/jpeg",
                "uri": "https://i.scdn.co/image/532d7d184c3a8887932a29f4fb29fb4ff4665b40",
                "width": 640
            }
        }
    ],
    "is_collected": true,
    "tracks": [
        {
        	"id": 11111111,
            "cover_image": {
    		    "uri": "https://berserker1.vibbidi-vid.com/vibbidi/videos/video___4u6bWs-ZG0o___csju58en5nnseewtocu8ansdbo.mp4.bgcover.jpg"
    		},
    		"uri": "https://berserker7.vibbidi-vid.com/vibbidi/videos/video___hLQl3WQQoQ0___1jpumz9w3entnbgahmhfeo85k7.mp4",
    		"duration": 7382.9,
    		"mime_type": "video/mp4",
    		"width": 1280,
    		"height": 720,
    		"size": 443823359,
    		"integrated_loudness": -11.1,
    		"player_audio_volume": 0.5688529308438415,
    		"screen_shot_interval": 20,
            "original_videos": [
            	{
            		"id": 210241900955180,
            		"title": "Mr. Blue Sky",
            		"creator": "Charli XCXa",
            		"artist_id": 499273824010207,
            		"cover_image": {
                		"uri": "https://berserker4.vibbidi-vid.com/vibbidi/videos/video___swYdKF1MpWg___y4cjm5tzw6nokj3u48a357wpf7.mp4.bgcover.jpg"
            		},
            	},
            	{
            		"id": 210241900955180,
            		"title": "Mr. Blue Sky",
            		"creator": "Electric Light Orchestra",
            		"artist_id": 139317989948130,
            		"cover_image": {
                		"uri": "https://berserker4.vibbidi-vid.com/vibbidi/videos/video___swYdKF1MpWg___y4cjm5tzw6nokj3u48a357wpf7.mp4.bgcover.jpg"
            		},
            	},
            	{
            		"id": 210241900955180,
            		"title": "Mr. Blue Sky",
            		"creator": "Electric Light Orchestra",
            		"artist_id": 139317989948130,
            		"cover_image": {
                		"uri": "https://berserker4.vibbidi-vid.com/vibbidi/videos/video___swYdKF1MpWg___y4cjm5tzw6nokj3u48a357wpf7.mp4.bgcover.jpg"
            		},
            	},
            ],
        },
        /* ... */
    ],
    "n_tracks": 7
}


// POST /v4.1/users/me/collectedSpecial
// Requires signed in
// Form/JSON param: id=xxx
Response =
    {
        "success": true
    }