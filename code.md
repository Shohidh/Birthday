You are an expert Senior Frontend Engineer and UI/UX Designer.

Build a production-ready React application called "Sunflower Garden".

This should look like a premium interactive experience, similar to Apple product pages and Disney storytelling websites.

The application must be fully responsive (mobile-first) and optimized for desktop.

Use modern React best practices.

----------------------------------------------------
TECH STACK
----------------------------------------------------

- React 19
- Vite
- React Router
- Tailwind CSS
- Framer Motion
- React Icons
- Howler.js
- canvas-confetti
- react-intersection-observer

Use functional components only.

Use hooks.

No class components.

Use reusable components.

No Redux.

Use Context API if needed.

----------------------------------------------------
PROJECT STRUCTURE
----------------------------------------------------

Create the following structure:

src/

components/

common/

Button
Card
FloatingPetals
Clouds
Butterflies
Bee
Navbar
Footer

login/

LoginCard

garden/

Hero
SunflowerField
Sky
Sun
GardenGate

gallery/

MemoryCard
GalleryGrid
PhotoModal

letter/

Envelope
Letter

cake/

BirthdayCake
Candles

effects/

Fireworks
Confetti
MusicPlayer

pages/

LoginPage
GardenPage

config/

config.js

assets/

images
music
icons

hooks/

styles/

App.jsx
main.jsx

----------------------------------------------------
THEME
----------------------------------------------------

Primary Color:
#F8C537

Secondary:
#7CB342

Background:
#FFFDF5

Accent:
#FFB703

Typography:
Poppins

Rounded corners

Soft shadows

Glassmorphism login card

----------------------------------------------------
LOGIN
----------------------------------------------------

The first screen should be a login page.

Center card.

Animated sunflowers.

Moving clouds.

Floating petals.

Username and password fields.

Credentials are stored inside:

config/config.js

Example:

export const CONFIG = {

username:"revathi",

password:"happybirthday"

}

If login succeeds

Animate to Garden.

If login fails

Shake card

Display:

"The flowers don't recognize you 🌻"

----------------------------------------------------
LOADING
----------------------------------------------------

After login

Show loading screen

Animated sunflower

Text:

"Planting Happiness..."

Progress bar animation

Fade into garden

----------------------------------------------------
GARDEN
----------------------------------------------------

Hero section.

Full viewport.

Blue sky.

Animated clouds.

Sun slowly rotates.

Sunflowers gently sway.

Butterflies fly randomly.

Bees move.

Floating flower petals.

Grass waves.

Clicking "Enter Garden"

Scrolls to next section.

----------------------------------------------------
HERO
----------------------------------------------------

Display

Happy Birthday

with animated letters.

Subtitle

"You make every day bloom brighter."

Large CTA button.

----------------------------------------------------
MEMORY GALLERY
----------------------------------------------------

Responsive Masonry Grid.

Images loaded from

config.js

Click image

Open modal.

Modal has

Image

Caption

Previous

Next

Fade animation.

----------------------------------------------------
TIMELINE
----------------------------------------------------

Animated timeline.

Cards appear on scroll.

Each card has

Date

Icon

Title

Description

Loaded from config.

----------------------------------------------------
LETTER
----------------------------------------------------

Envelope animation.

Click envelope.

Envelope opens.

Paper unfolds.

Typewriter animation.

Message loaded from config.

----------------------------------------------------
MUSIC
----------------------------------------------------

Floating music button.

Howler.js

Loop music.

Mute/unmute.

----------------------------------------------------
CAKE
----------------------------------------------------

Birthday cake.

Animated candles.

Flames flicker.

Button:

Blow Candles

On click

Candles go off.

Confetti.

----------------------------------------------------
FINALE
----------------------------------------------------

Full screen.

Fireworks.

Confetti.

Final message

"Happy Birthday ❤️"

Button

Replay Journey

----------------------------------------------------
CONFIGURATION
----------------------------------------------------

Everything must be editable from

config.js

Name

Birthday

Username

Password

Photos

Timeline

Letter

Music

Theme colors

Example:

export const CONFIG = {

username:"revathi",

password:"happybirthday",

name:"Revathi",

birthday:"2026-08-15",

music:"/music/song.mp3",

photos:[

{

src:"/photos/1.jpg",

caption:"Our favorite memory"

}

],

timeline:[

{

date:"2024",

title:"First Trip",

description:"..."

}

],

letter:`

Happy Birthday ❤️

Thank you...

`

}

----------------------------------------------------
ANIMATIONS
----------------------------------------------------

Framer Motion

Use

fade

slide

scale

stagger

hover

parallax

Reveal on scroll.

No janky animations.

----------------------------------------------------
RESPONSIVE
----------------------------------------------------

Must work perfectly on

320px

375px

768px

1024px

1440px

Desktop

Tablet

Mobile

Landscape

Portrait

----------------------------------------------------
ACCESSIBILITY
----------------------------------------------------

Proper aria labels.

Keyboard navigation.

Visible focus states.

Good color contrast.

----------------------------------------------------
PERFORMANCE
----------------------------------------------------

Lazy load images.

Code splitting.

Memoize expensive components.

Optimize animations.

----------------------------------------------------
CODE QUALITY
----------------------------------------------------

Use ESLint-friendly code.

Use reusable hooks.

Create constants.

Avoid duplication.

Use clean folder structure.

Add comments only where necessary.

----------------------------------------------------
DELIVERABLE
----------------------------------------------------

Generate the ENTIRE application.

Do NOT generate placeholder components.

Every file should be complete.

Generate all imports correctly.

Generate all package dependencies.

Generate README.md with:

Installation

npm install

npm run dev

Build

npm run build

Deployment to Vercel

Deployment to GitHub Pages

----------------------------------------------------
BONUS
----------------------------------------------------

Add a hidden easter egg.

If the user clicks a sunflower 10 times,

show:

"You're as bright as every sunflower in this garden 🌻"

with confetti.