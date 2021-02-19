// Important Dependencies....
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");

// The magic marker that creates the actual file now.
const generateMarkdown = require("./utils/generateMarkdown")
const writeFileAsync = util.promisify(fs.writeFile);

/// User input fields. 
function userQuestions() {
    return inquirer.prompt([
    {
        type: "input",
        name: "fileName",
        message: "What is the file (NOT THE MAP'S NAME. This is used to appropriately )",
    },
    {
        type: "input",
        name: "releaseDate",
        message: "When was this map made?",
    },
    {
        type: "input",
        name: "mapName",
        message: "Name of the map/mod/pack",
    },
    {
        type: "input",
        name: "files",
        message: "names of the map files included in the folder (name.bsp)",
    },
    {
        type: "input",
        name: "author",
        message: "Who made this project?",
    },
    {
        type: "input",
        name: "description",
        message: "Briefly describe the map or pack",
    },
    {
        type: "list",
        name: "singleplayer",
        message: "Is this for singleplayer?",
        choices: [
            "Yes",
            "No"
        ]
    },
    {
        type: "list",
        name: "singleplayer",
        message: "Is this Co-Op compatible?",
        choices: [
            "Yes",
            "No"
        ]
    },
    {
        type: "input",
        name: "monsterCount",
        message: "How many monster are in the map? (you can simply type NA for packs or dm only maps.)",
    },
    {
        type: "input",
        name: "secretCount",
        message: "How many secrets are in the map? (you can simply type NA for packs or dm only maps.)",
    },
    {
        type: "list",
        name: "tourney",
        message: "Is this Tourney compatible?",
        choices: [
            "Yes",
            "No"
        ]
    },
    {
        type: "list",
        name: "deathmatch",
        message: "Is this Deathmatch compatible?",
        choices: [
            "Yes",
            "No"
        ]
    },
    {
        type: "list",
        name: "ctf",
        message: "Is this Capture-the-flag compatible?",
        choices: [
            "Yes",
            "No"
        ]
    },
    {
        type: "input",
        name: "requirements",
        message: "What is required to allow this map to run. (Be somewhat descriptive.)",
    },
    {
        type: "input",
        name: "credits",
        message: "What assets belong to who?",
    },
    {
        type: "input",
        name: "skybox ",
        message: "Custom skybox credits / name",
    },
    {
        type: "input",
        name: "musicUsed",
        message: "Custom music credits / name",
    },
    {
        type: "list",
        name: "editorUsed",
        message: "What editor did you use to make this map?",
        choices: [
            "TrenchBroom",	
            "Worldcraft",
            "GTKRadiant",
            "NetRadiant-custom",
            "QERadiant",
            "QE5",
            "QuArK"
        ]
    },
    {
        type: "input",
        name: "wads",
        message: "What texture wads did you use?",
    },
    {
        type: "input",
        name: "testedEngines",
        message: "What engines was this map tested with?",
    },
    {
        type: "input",
        name: "knownBugs",
        message: "Known Bugs",
    },
    {
        type: "input",
        name: "buildTime",
        message: "Build time",
    },
    {
        type: "list",
        name: "distro",
        message: "Players ___ make changes, or redistribute",
        choices: [
            "CAN NOT",
            "CAN"
        ]
    },
]);
} 

// Async function that reads the user prompt
async function init() {
    try {
        // Ask user questions and generate responses
        const answers = await userQuestions();
        // Then magically spits out a readme following the template.
        const populateReadme = generateMarkdown(answers);

        // Write new README.md to dist directory
        await writeFileAsync(`./output/${answers.fileName}_README.txt`, populateReadme);
        console.log('Successfully wrote to README.md');

        // Backup error just in case.
    }   catch(err) {
        console.log("Uh oh, Looks like something went horrifically wrong!")
        console.log(err);
    }
  }
  
  //Majick startup
  init();  
