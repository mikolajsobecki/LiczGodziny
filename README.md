# Firebase Studio

This is a NextJS starter in Firebase Studio.

To get started, take a look at src/app/page.tsx.

## Reminder notifications (PWA)

Reminders are handled in two ways:

1. **Local notification** – when the web page is open, a `setInterval` checks
   the hour and displays a `Notification` using the browser API. This works in
   any modern browser but requires the app to be running in the foreground.
2. **Push notification via Firebase Cloud Messaging** – when the user enables
   reminders and grants notification permission, the client obtains an FCM token
   and stores it on the user profile. A backend (e.g. a scheduled Cloud
   Function) can then send a push at the configured time, which will be
   delivered by the service worker even if the PWA is closed.

To make the PWA receive push events, `public/sw.js` listens for `push`
messages and displays them. A `NEXT_PUBLIC_FIREBASE_VAPID_KEY` environment
variable should be set to your web push VAPID key (see Firebase console ->
Project settings -> Cloud Messaging).

The UI for configuring the reminder time and enabling notifications lives in
`src/components/UserSettingsDialog.tsx`. The logic for generating local
notifications is in `src/hooks/use-notification-reminder.ts`, and the FCM token
management is in `src/hooks/use-firebase-messaging.ts`.

To schedule notifications from the server, create a Cloud Function that runs
once per minute (or with a cron schedule) and queries all user profiles where
`reminderEnabled == true` and `reminderTime` matches the current hour/minute,
and then sends a message via FCM to each `fcmToken`. A simple example is
included in `docs/backend.json`.

To get started, take a look at `src/app/page.tsx`.