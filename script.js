const storyText = document.getElementById('story-text');
const choicesContainer = document.getElementById('choices');

// Define game story and choices
const gameData = {
  start: {
    text: "this is a choice based game where your every choice takes you to different part and decides your fate , the destiny is the same but each path is different",
    choices: [
      { text: "Enter Game", next: "RealStart" },
    ],
  },
  RealStart: {
    text: "You have been kidnap stay quite here",
    choices: [
      { text: "Let me go", next: "choiceA" },
      { text: "Who are you motherfucker", next: "b" },
    ],
  },
  choiceA: {
    text: "I have not kidnapped you to let you go",
    choices: [
      {
        text: "You don't even know me, why the fuck have you kidnapped me",
        next: "choiceA2",
      },
      {
        text: "but Why have you kidnapped me and who are you asshole",
        next: "b",
      },
    ],
  },
  choiceA2: {
    text: "I know you very well, kuthla school , college kuthe rahte kadhi gharatun nighte kadhi ghari yete, kiti mulana bhete i studied every thing about you",
    choices: [
      {
        text: "fuck tula yevdha sagla kasa mahiti, nakki ahes kon tu sangshil mla",
        next: "choiceB",
      },
    ],
  },
  b: {
    text: "gapp bas aai zavade!!",
    choices: [{ text: "..", next: "choiceB" }],
  },
  choiceB: {
    text: "Who am I? ask me who was I! me toch hoto jo tula lapun lapun school madhe baghaycho pn jevha me confess kela u made fun of me huh , sagle majha vr hasat hote",
    choices: [{ text: "mmm mla ny athvat kon ahes tu", next: "choiceB1" }],
  },
  choiceB1: {
    text: "Tula nasel athvaat pn mla athavta , toh ek ek second jevha tumhi sagle majha vr haslaat, mich ahe toh jo classroom madhe eka corner madhe shant basaycha DEVRAJ",
    choices: [{ text: "Dev!! tu!!", next: "C" }],
  },
  C: {
    text: "Ho mich ani dev ny Sir bolaycha, tujha baap jya company madhe jaato na tyacha boss ahe me owner",
    choices: [
        {text:"whatt!!", next:'D'},
        {text:'Ha tr me ky karu mgh Gandu',next:'d2'}
    ],
  },
  D: {
    text: "Ho I am the owner of India's biggest Real Estate firm, The self made millionaire, the only one in India to have his private Jett",
    choices: [
        {text:"omg wow", next:'e'},
        {text:'whatever, mla ka ithe anlay , ky havay nakki tula !!',next:'e2'}
    ],
  },
  d2: {
    text: "khup boltes g randi, khup tond chalta tujha, gapp bas nytr ithech tujha ghasyaat majha lund kombun gapp karin tula",
    choices: [
      {text:'are jaa na bhadya ',next:'f'},
      {text:'tujha lund chokayla ky me rastya varchi randi nahiye',next:'f2'}
    ],
  },
  e: {
    text: "ohh i guess you are pretty impressed *Opens shirt top 3 buttons , now you can see a well muscular chest with a tattoo of snake in S shape around A sword*",
    choices: [
      {text:'ahmm yes I am impressed',next:'g'},
      {text:'*stares at the open chest*',next:'g2'}
    ],
  },
  e2: {
    text: "khup boltes g randi, khup tond chalta tujha, gapp bas nytr ithech tujha ghasyaat majha lund kombun gapp karin tula",
    choices: [
      {text:'are jaa na bhadya ',next:'f'},
      {text:'tujha lund chokayla ky me rastya varchi randi nahiye',next:'f2'}
    ],
  },
  f: {
    text: "jaatoch tr ahot apan majha private island vr jithe fakt tu me, majhe maids and animals ahet",
    choices: [
      {text:'whatt !!',next:'h1'},
      
    ],
  },
  f2: {
    text: "*opens my shirt button and walks towards you, with a gun in hand and then grab you by your neck and make u look up in my eyes* 'tu randi asu kiva bayko , pn asnaar tr majhich ani majhich fakt' ",
    choices: [
      {text:'huhh',next:'h2'},
      
    ],
  },
  g: {
    text: "then be ready to get impressed more because now we are going to my private island from that Jet and there you will be treated as a queens by the 50 maids i have there, only if u co-operate",
    choices: [
      {text:'*nods and agree to go* I am ready to be queen',next:'end'},
      {text:'and what if i dont co-operate ',next:'h4'},
    ],
  },
  g2: {
    text: "Do you love what you see? i am sure you would love to see what's inside this too *opens pant hooks*",
    choices: [
      {text:'ahmmmm',next:'i1'},
      {text:'no no no',next:'i2'},
      
    ],
  },
  h1: {
    text: "Ho lets go",
    choices: [
      {text:'..',next:'end'},
    ],
  },
  h2: {
    text: "Kisses you tightly on your lips while sucking your tongue, get ready we are going to my island jithe me tula kharokhar majha zavadya randi sarkha thevnaar ahe, like wife sarkha prem tr bhetelach mgh majhi aag tr tujha sarkhi bharleli randich mitavu shakte",
    choices: [
      {text:'island',next:'end'},
    ],
  },
  h4: {
    text: "then I will make you my own personal fucking slut and devour each single part of you and use your body like my sex toy",
    choices: [
      {text:'mmm...',next:'end'},
    ],
  },
  i1: {
    text: "haha not here my little slut lets go to island first",
    choices: [
      {text:'Yes daddy',next:'end'},
    ],
  },
  i2: {
    text: "haha scared already , lets now just go to island ",
    choices: [
      {text:'mm..',next:'end'},
    ],
  },
  
  end: {
    text: "lands at deserted island with a big mansion in center and jungle around.... to be continued in Part 1",
    choices: [],
  },
};

// History array to track previous choices
let history = [];

// Function to update story and choices
function updateStory(scene) {
  const sceneData = gameData[scene];

  // Add current scene to history
  if (history.length === 0 || history[history.length - 1] !== scene) {
    history.push(scene);
  }

  // Update story text
  storyText.innerText = sceneData.text;

  // Clear previous choices
  choicesContainer.innerHTML = '';

  // Generate choice buttons
  sceneData.choices.forEach((choice) => {
    const button = document.createElement('button');
    button.innerText = choice.text;
    button.onclick = () => updateStory(choice.next);
    choicesContainer.appendChild(button);
  });

  // Create control buttons for Back and Restart
  const controlButtons = document.createElement('div');
  controlButtons.id = 'control-buttons';

  // Add Go Back button if possible
  if (history.length > 1) {
    const backButton = document.createElement('button');
    backButton.innerText = "⬅️ Go Back";
    backButton.onclick = () => {
      history.pop(); // Remove current scene
      updateStory(history.pop()); // Go to the previous scene
    };
    controlButtons.appendChild(backButton);
  }

  // Add Restart button
  const restartButton = document.createElement('button');
  restartButton.innerText = "🔄 Restart";
  restartButton.onclick = () => {
    history = []; // Clear history
    updateStory('start'); // Restart game
  };
  controlButtons.appendChild(restartButton);

  // Append control buttons to choices container
  choicesContainer.appendChild(controlButtons);
}

// Initialize game
updateStory('start');
