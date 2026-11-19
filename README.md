# Kerala Traditional Wedding Invitation Website

A responsive wedding invitation starter built with plain HTML, CSS and JavaScript.

## 1. Open the website on your computer
1. Download and unzip this project.
2. Install Visual Studio Code: https://code.visualstudio.com/
3. Open the unzipped `kerala-wedding-invitation` folder in VS Code.
4. Open `index.html` in a browser. Recommended: install the VS Code extension "Live Server", right-click `index.html`, then choose "Open with Live Server".

## 2. Personalise the details
Open `script.js` and edit the `wedding` object at the top:
- `names`: couple's names
- `date`: event date and local time in `YYYY-MM-DDTHH:MM:SS` format
- `displayDate`: date shown on the page
- `eventTime`: ceremony time
- `venueName`: venue name
- `venueAddress`: full venue address
- `mapUrl`: Google Maps destination URL
- `shareMessage`: WhatsApp invitation message

The current names/date are example details from the reference shared in the conversation. Replace them if needed. The venue and time are placeholders.

## 3. Add your photographs
Replace the image files in `assets/images/` with your own photos, keeping these exact filenames:
- `hero.jpg` — wide cover photo (recommended landscape, 1600 x 2000 or larger)
- `couple-1.jpg`
- `couple-2.jpg`
- `couple-3.jpg`

Use your own photos or images you have permission to use. If you rename files, update the matching `src` or CSS background path in `index.html` / `style.css`.

## 4. Add background music
Add an MP3 file named `wedding-music.mp3` to `assets/audio/`.
Use music you own or have permission to use. Browsers may block autoplay; visitors can tap Play music. The opening button also attempts to start it.

## 5. Google Maps link
1. Open Google Maps.
2. Search the exact wedding venue.
3. Tap Share, then Copy link.
4. Paste that link as the `mapUrl` value in `script.js`.

## 6. Publish free with GitHub Pages
1. Create or sign in to a GitHub account: https://github.com/
2. Create a new public repository, for example `wedding-invitation`.
3. Upload the contents of this folder (upload `index.html`, `style.css`, `script.js`, and the `assets` folder; do not upload only the ZIP).
4. In the repository, open Settings → Pages.
5. Under Build and deployment, choose "Deploy from a branch".
6. Select branch `main` and folder `/ (root)`, then Save.
7. Wait for deployment. GitHub will show a free address similar to `https://yourusername.github.io/wedding-invitation/`.

## 7. Test before sharing
- Open the link on a phone.
- Test the opening button and music.
- Check countdown date/time.
- Tap the map link.
- Tap WhatsApp sharing.
- Check all photos load.
- Share the link with a friend before sending it to all guests.

## Notes
- This is a static website; it does not collect RSVP responses or store guest information.
- A free GitHub Pages address is enough to get started. You can connect a custom domain later.
- Do not put private phone numbers, home addresses or sensitive family details on a public website unless you intend them to be public.
