export type Bestie = {
  id: string;
  name: string;
  age: number;
  pronouns: string;
  bio: string;
  avatar: string;
  photos: string[];
  interests: string[];
  vibe: string;
  music: string[];
  socialEnergy: number; // 1-5
  sleepSchedule: "Early bird" | "Balanced" | "Night owl";
  pets: string;
  goals: string[];
  location: string;
  distance: number;
  compatibility: number;
  verified: boolean;
};

const av = (seed: string) => `https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}&backgroundColor=ffd5dc,c0aede,b6e3f4,d1f7c4,ffdfbf`;

export const besties: Bestie[] = [
  {
    id: "1", name: "Maya", age: 23, pronouns: "she/her",
    bio: "Plant mom 🌿 always down for matcha walks & deep convos at 2am",
    avatar: av("maya"), photos: [av("maya"), av("maya2"), av("maya3")],
    interests: ["Streetwear", "Thrift flips", "Graffiti tours", "Vinyl crates", "Rooftop cyphers"],
    vibe: "Cozy bookworm",
    music: ["Clairo", "Mitski", "Beabadoobee"],
    socialEnergy: 3, sleepSchedule: "Night owl", pets: "Two cats 🐱",
    goals: ["Brunch buddy", "Concert plus-one", "Honest convos"],
    location: "Brooklyn, NY", distance: 2, compatibility: 96, verified: true,
  },
  {
    id: "2", name: "Jordan", age: 25, pronouns: "they/them",
    bio: "Skater, sound designer, will rate your playlist out of 10 ✨",
    avatar: av("jordan"), photos: [av("jordan"), av("jordan2")],
    interests: ["Skate spots", "Turntables", "Bodega runs", "Analog photo", "Sneaker drops"],
    vibe: "Chill creative",
    music: ["Tyler the Creator", "Steve Lacy", "Frank Ocean"],
    socialEnergy: 4, sleepSchedule: "Balanced", pets: "Dog named Miso 🐶",
    goals: ["Studio sessions", "Skate park hangs"],
    location: "Brooklyn, NY", distance: 3, compatibility: 92, verified: true,
  },
  {
    id: "3", name: "Aria", age: 22, pronouns: "she/her",
    bio: "Pilates princess by day, karaoke queen by night 🎤",
    avatar: av("aria"), photos: [av("aria"), av("aria2")],
    interests: ["Dance battles", "Nail art", "Late-night ramen", "Block parties", "Subway sketching"],
    vibe: "Sparkly extrovert",
    music: ["Taylor Swift", "Olivia Rodrigo", "Sabrina Carpenter"],
    socialEnergy: 5, sleepSchedule: "Balanced", pets: "Goldfish",
    goals: ["Travel buddy", "Workout partner", "Brunch crew"],
    location: "Manhattan, NY", distance: 5, compatibility: 89, verified: false,
  },
  {
    id: "4", name: "Sam", age: 27, pronouns: "he/him",
    bio: "Hiking + ramen + bad puns. Looking for a hype friend 🥾",
    avatar: av("sam"), photos: [av("sam")],
    interests: ["Basketball courts", "Taco trucks", "Beat making", "Vintage tees", "Arcade nights"],
    vibe: "Wholesome adventurer",
    music: ["Bon Iver", "Phoebe Bridgers", "The 1975"],
    socialEnergy: 3, sleepSchedule: "Early bird", pets: "None",
    goals: ["Trail buddy", "Game nights"],
    location: "Queens, NY", distance: 8, compatibility: 87, verified: true,
  },
  {
    id: "5", name: "Lena", age: 24, pronouns: "she/her",
    bio: "Soft launch your friendship era with me 💌 baker & illustrator",
    avatar: av("lena"), photos: [av("lena"), av("lena2")],
    interests: ["Zine making", "Screen printing", "Underground shows", "Sticker slaps", "Coffee dives"],
    vibe: "Soft + creative",
    music: ["Laufey", "Faye Webster", "Adrianne Lenker"],
    socialEnergy: 2, sleepSchedule: "Early bird", pets: "Bunny 🐰",
    goals: ["Studio dates", "Cafe hopping"],
    location: "Brooklyn, NY", distance: 1, compatibility: 94, verified: true,
  },
  {
    id: "6", name: "Kai", age: 26, pronouns: "he/they",
    bio: "Run club, climbing gym, late night tacos 🌮 let's gooo",
    avatar: av("kai"), photos: [av("kai")],
    interests: ["Parkour", "Bouldering", "Street food", "Fixed gear", "Warehouse sets"],
    vibe: "High energy hype",
    music: ["Glass Animals", "Tame Impala", "Vampire Weekend"],
    socialEnergy: 5, sleepSchedule: "Balanced", pets: "None",
    goals: ["Workout buddy", "Sports watch parties"],
    location: "Brooklyn, NY", distance: 4, compatibility: 85, verified: false,
  },
];

export const matches = [besties[0], besties[4], besties[1]];

export type ChatMsg = { id: string; from: "me" | "them"; text: string; time: string };
export const chats: { bestie: Bestie; lastMessage: string; time: string; unread: number; messages: ChatMsg[] }[] = [
  {
    bestie: besties[0], lastMessage: "okay matcha date saturday???", time: "2m", unread: 2,
    messages: [
      { id: "a", from: "them", text: "omgg we matched 💕", time: "10:01" },
      { id: "b", from: "me", text: "the algorithm KNEW", time: "10:02" },
      { id: "c", from: "them", text: "have you been to that new matcha spot on Bedford?", time: "10:04" },
      { id: "d", from: "them", text: "okay matcha date saturday???", time: "10:05" },
    ],
  },
  {
    bestie: besties[4], lastMessage: "sending the bakery pin rn 🥐", time: "1h", unread: 0,
    messages: [
      { id: "a", from: "me", text: "saw your illustrations, obsessed", time: "9:15" },
      { id: "them", from: "them", text: "stoppp ty 🥹 sending the bakery pin rn 🥐", time: "9:20" },
    ],
  },
  {
    bestie: besties[1], lastMessage: "playlist incoming 🎧", time: "yesterday", unread: 0,
    messages: [{ id: "a", from: "them", text: "playlist incoming 🎧", time: "yesterday" }],
  },
];

export const groups = [
  { id: "g1", name: "Bodega Cypher Collective", emoji: "🎤", members: 8, nextHangout: "Sat 11pm · Bushwick rooftop", color: "gradient-warm" },
  { id: "g2", name: "Concrete Sneaker Heads", emoji: "👟", members: 12, nextHangout: "Sun 2pm · SoHo drop", color: "gradient-accent" },
  { id: "g3", name: "Underground Vinyl Club", emoji: "💿", members: 6, nextHangout: "Fri 10pm · Basement set", color: "gradient-secondary" },
  { id: "g4", name: "Graffiti + Grit Crew", emoji: "🎨", members: 5, nextHangout: "Wed 9pm · LES walls", color: "gradient-sunset" },
];

export const icebreakers = [
  "What's your most controversial food opinion?",
  "If your week had a soundtrack, what's the opening song?",
  "Best $20 you spent recently?",
  "Coffee order = personality. Yours?",
  "Most chaotic thing in your camera roll right now?",
  "What's a tiny thing that made you happy today?",
];

export const quizQuestions = [
  { q: "Friday night you're most likely…", options: ["Cozy on the couch 🍿", "Out til 2am ✨", "Tiny dinner with 2 friends 🍝", "New activity / class 🎨"] },
  { q: "Pick your texting energy", options: ["Voice notes only 🎙️", "Paragraphs 📝", "Memes & reactions 😭", "Once a day, but make it count"] },
  { q: "Your ideal hangout vibe", options: ["Coffee + walk ☕", "Loud concert 🎶", "Game night 🎲", "Spontaneous road trip 🚗"] },
  { q: "On the friendship spectrum you're…", options: ["Group chat glue 💬", "Deep 1:1s 🫶", "Adventure planner 🗺️", "Always down, never planning"] },
];
