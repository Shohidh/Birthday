export const CONFIG = {
  username: '', password: 'PAMMI', name: 'Shameen', birthday: '2026-07-11',
  music: new URL('../assets/music.mp3', import.meta.url).href,
  media: {
    sunflowerGif: '',
    sunflowerVideo: ''
  },
  theme: { primary: '#F8C537', secondary: '#7CB342', background: '#FFFDF5', accent: '#FFB703' },
  photos: [
    { src: new URL('../assets/wiithlove.jpg', import.meta.url).href, caption: 'IFYKYK' },
    { src: new URL('../assets/bouquet.jpeg', import.meta.url).href, caption: 'First bouquet. First smile. One unforgettable memory.' },
    { src: new URL('../assets/sky_diving.jpg', import.meta.url).href, caption: 'Ready to take the leap… together?' },
    { src: new URL('../assets/asin.jpg', import.meta.url).href, caption: 'Still waiting for your recreation' },
    { src: new URL('../assets/selfie.jpg', import.meta.url).href, caption: 'Making up for the selfie we never took.' },
  ],
  timeline: [
    {
      date: 'The beginning', icon: '*',
      title: 'A wonderful chapter', description: 'The world became a little brighter when you arrived.'
    },
    { date: 'Every day', icon: 'O', title: 'Reasons to smile', description: 'Your kindness turns ordinary days into favorite memories.' },
    { date: 'Today', icon: '*', title: 'Your day to bloom', description: 'Here is to a year full of wonder, laughter, and sunshine.' }
  ],
  letter: `Happy Birthday!

It's funny how some of the best people enter our lives completely unplanned. If someone had told me a couple of months ago that we'd go from random conversations to sharing so many laughs, songs, movie references, and random reels, I probably wouldn't have believed them. But here we are, and I'm genuinely glad we met.

In these past two months, I've come to know someone who is kind, funny, mature, and thoughtful. One of the things I admire most about you is the way you think about life. You ask meaningful questions that make conversations interesting, and that's honestly rare. Talking to you never feels boring because there's always something worth discussing.

It's also funny how many things we have in common—our taste in songs, movies, Stranger Things, and all the random references that somehow make perfect sense to us. I still remember the first time we met. I was standing there with flowers, wondering how the moment would go, and you were just so chill and kind that it instantly made everything comfortable.

Thank you for tolerating all my lame jokes, unnecessary meme references, and movie dialogues. And thanks for occasionally sending those reels where you mimic movie dialogues—they never fail to make me smile.

I also have to mention that I'm your biggest fan when it comes to your singing. (Yes, that was sarcasm... before you start thanking me. \u{1F604})

Jokes aside, I genuinely hope everything you're working towards falls into place. I hope life surprises you in the best ways, that things keep moving in a positive direction, and that you continue to find happiness in both the little moments and the big milestones. You deserve good people, good memories, and plenty of reasons to smile.

Thank you for being the wonderful person you are. I hope this birthday brings you peace, laughter, great food, amazing memories, and a year filled with opportunities and happiness.

Wishing you the happiest birthday. Have an incredible day—you deserve it!`
};
