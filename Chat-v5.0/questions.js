#################
# *Spec Summary*
#################

- on v5, users can only chat on the VTV dance floor.

- (MUST) Text Message
// - (Nice to Have) Send Single Song
// - (That's not a priority on v5) Send Collection

- (MUST) one-on-one chat
// - (That's not a priority on v5) Group chat

// - (That's not a priority on v5) unread, already read

*People who are following each other*
- People who are following each other, can chat any number of people per day
    > If I have 10 followers, I can chat with all of them in a day.

*People who are not following each other*
- (MUST) People who are not following each other can only chat five people in 24 hours
    > I can start new conversation with only 5 max strangers, in 24 hours.
    > Allow the case more than 5 strangers start new conversation with me.

- (MUST) Every time user invite a friend with his invitation code, the maximum number that can be chat with people who you are not following will increase by 10
    > As I see in new pages, we are lacking of the function/page to identify the invitation code? -> in Sign Up
    > Also, we might need to notify user that he/she gains the gift: "Congratulations, you can chat with xxx new friend now!" -> Yes

- Initial: 5 people
- 1 person after invitation: 15 people
- 2 people after invitation: 25 people
- 3 people after invitation: 35 people
- 4 people after invitation: 45 people

- (MUST) Approval is necessary to start a conversation with an unknown person


*Need Facebook Connect*
- (MUST) After pressing "Send" for the first time in chat
- (MUST) After pressing "Send" for the first time in the comment input field
    > User need “FB connect” to chat.

--------------------------

- Page_1_p3
    > Start a new conversation -> empty
    > Already have conversation -> show content

- Page_1_p3 -> Page_2_p1
    > Chat dialog becomes full screen by tap on chat input? ->  The screen expands like the Fullscreen of Mac OS Finder.
    > If we tap back in Page_2_p1, the Page_1_p2 will re-appear.
    [!] To open Page_2_p1 from Page_1_p3, I suggest that we have full-screen-button on top right menu to switch between fullsceen <-> dialog, is it okay?

- Page_2, Page_3
    [x] Smile icon is using to open Gif Emojis collection (same with VTV page) ? -> not include gif in chat in v5.0
    > How to dismiss keyboard: scroll up/down in message area? -> follow to Facebook / iMessage UX
    > How many max characters do we allow in message? -> 150

- Page_6 (assume that I send message to Zebbie)
    > The purple view only shows up if I send message to Zebbie? Otherwise it's empty as Page_1_p3? -> Yes
    > Do I allow to send another message, or only one message to get the request? -> Only one
    > I don't see the keyboard in 1a, 1b, 2a, 2b, does it mean I only send 1 message and have to wait for approval from Zebbie to send more? -> yes
    > The purple area will stay remaining, no matter Zebbie approves or rejects the request? And later even we chat a lot? -> intend to do so

- Page_7 (assume that Zebbie send me a request)
    [!] How Page_7_p1 appear when I'm in VTV page? And what happen if I have more than 1 invitation?
    [!] If I reject the request, the chat between Zebbie and me won't appear in p2?

- Page_8
    > What is the 'Today' label on top mean? -> group messages in date
    > Group continous messages could take times, pls consider the case that we seperate messages into individual rows (like https://zpl.io/bz84xkz). -> updated

- Page_9
    > Does p1 only appear when I send 1st messsage on VIBBIDI, and won't show incase I reinstall app (with Fb connected before)? -> yes. Need server involve
    > And if I tap close in p1 (without connect Facebook) -> Stay in Page_2, Page_3, Page_4, Page_5 without sending message? -> yes
    [!] How does the invitation code work in our app? -> in Sign up page

- Page_6
    [!] The UI of purple area make me feel a dating app. Besides, I'm considering the case people just want to make friends (guy/guy, girl/girl..). -> Should we make it look more friendly?

- Page_7, Page_8
    [!] In case I have a lot of conversations, and I need to switch between p2, p3a, p3b -> Each time I get in a chat, it always appear a dialog and have to enter full screen. From this point, it could be an uncomfortable UX.
    [!] Is it okay if we put the the popup in p1 into a small view in p3a (under the messages)? It might be better when user gets a lot of requests.


--------------------------

- Don't implement Block in v5.0

- Don't implement status 'A is typing...', 'A is read' in 5.0

- Auto play (and replay) selected video in Page 4_p2, p3




