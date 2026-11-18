# LEDC website

The website of the Law, Environment and Development Centre (LEDC), SOAS University of London.

It runs on GitHub Pages (free), from the law-environment-and-development-centre organisation. Every change you commit to this repository rebuilds the site automatically, usually within a minute or two.

You can make every change below in your web browser on github.com. You don't need to install anything.

## Where things live

| To change… | Edit this file |
|---|---|
| An event (add, edit, remove) | `_events/` (one file per event) |
| Team members, bios, photos | `_data/team.yml` |
| Research projects (and which ones are featured on the homepage) | `_data/research.yml` |
| Clinic projects | `_data/clinic_projects.yml` |
| Clinic partner logos | `_data/partners.yml` |
| Research themes (About page) | `_data/themes.yml` |
| LLM module pages | `_modules/` (one file per module; `semester:` is the SOAS term, 1 or 2) |
| PhD projects (ongoing ones link to SOAS profiles) | `_data/phd.yml` |
| Members (academics, associates, PhD researchers, alumni) | `_data/members.yml` |
| Events & collaborations | `_data/collaborations.yml` |
| Advice, transnational education & impact | `research/advice-impact.md` |
| Menu items | `_data/navigation.yml` |
| Address, email, social links | `_config.yml` |
| Page text | `about.md`, `degree-programmes.md`, `clinical-work.md`, `research.md`, `index.html` |
| Colours and fonts | `assets/css/style.css` (top of the file) |

## Adding an event

1. Open the `_events` folder, then click **Add file → Create new file**.
2. Name it with the date first, e.g. `2027-02-04-water-law-seminar.md`.
3. Paste this in and fill it out:

   ```
   ---
   title: "LEDC Seminar Series – Title of the talk"
   date: 2027-02-04 17:30
   end: "19:00"
   location: "Room and building"
   register: https://www.eventbrite.co.uk/...
   ---
   Optional description of the event, speakers, etc.
   ```

4. Click **Commit changes**.

The event appears under *Upcoming events* on the homepage (the next three) and on the Events page, soonest first. Once it has finished it moves to *Past events* on its own, newest first, and its Register button disappears. "Finished" means its end time, or two hours after the start if there's no `end:` line, or the end of the day if the event has a date but no time. All times are UK time.

Leave old event files in place: they make up the past events archive.

## Editing a page or data file

Open the file, click the pencil icon, make your change, then click **Commit changes**. In `.yml` files, keep the indentation (spaces) the same as the lines around your edit.

## Images

Member photos are stored in `assets/img/`. The other photos still load from the Wix media library (`static.wixstatic.com`). To host an image here instead:

1. Upload it to `assets/img/` (**Add file → Upload files**).
2. Replace the long Wix URL in the relevant file with `/assets/img/your-file.jpg`.

Do this for every Wix image before closing the Wix account, or those images will disappear.

## Giving someone else access

Go to **Settings → Collaborators → Add people**. They can then edit everything above.

## Moving to ledc.info

1. In `_config.yml`, set `url: "https://ledc.info"`.
2. Go to **Settings → Pages → Custom domain**, enter `ledc.info`, and save.
3. At the domain registrar (currently connected to Wix), point the domain to GitHub Pages. GitHub lists the DNS records under **Settings → Pages**.
