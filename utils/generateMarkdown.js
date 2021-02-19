// function to generate markdown for README
function generateMarkdown(answers) {
  return `
  ${answers.fileName} 

Release date: ${answers.releaseDate} 

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Title:          ${answers.mapName} 
Files:          ${answers.files} 
Author:         ${answers.author} 
Description:    ${answers.description} 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Single Player	  ${answers.singleplayer}
Cooperative:	    ${answers.coop}
Tourney:          ${answers.tourney}
Deathmatch:       ${answers.deathmatch}
Monster Count: ${answers.monsterCount}
Secret Count:     ${answers.secretCount}    

Team deathmatch:  ${answers.tdm}
CTF:              ${answers.ctf}
Monster Count: ${answers.monsterCount}

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Designed for the Quakespasm engine.
http://quakespasm.sourceforge.net/
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

${answers.requirements}

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Assets used / Credits
${answers.credits}

Skybox: ${answers.skybox}

Music: ${answers.musicUsed}

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

SPECIAL THANKS to:
${answers.specialThanks}

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Base:           Original
Editors:     ${answers.editorUsed}
Other progs: ericw-tools (v0.18.1)
             ne_q1spCompilingGui v1.0.3
Other assets:	${answers.wads}

engines tested:	${answers.testedEngines}
known bugs:    ${answers.knownBugs}
build time:    ${answers.buildTime}
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Additional thanks to ...
id Software
The Quake Mapping discord (Founded by dumptruck_ds)
And lovely people like you. :}

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Distribution / Copyright / Permissions 

All rights reserved
Quake is a registered trademark of id Software, Inc.

This level ${answers.distro} be electronically distributed only at NO
CHARGE to the recipient in its current state, MUST include
this .txt file, and ${answers.distro} be modified in any way. 

============================================================
 - generated by quadburger helpr

      `;
    }
module.exports = generateMarkdown;
