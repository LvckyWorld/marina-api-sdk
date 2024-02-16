# Marina API SDK

The official LvckyWorld-API as NPM PACKAGE <br /> <br />
[![Docs](https://img.shields.io/badge/-DOCUMENTATION-007396.svg?logo=Read%20the%20Docs&logoColor=white&longCache=true&style=for-the-badge)](https:///docs.lvckyworld.net/marina-api-sdk/) [![Website](https://img.shields.io/badge/-WEBSITE-FF7139.svg?logo=Firefox%20Browser&logoColor=white&longCache=true&style=for-the-badge)](https://lvckyworld.net/)  [![Discord](https://img.shields.io/badge/-DISCORD-5865F2.svg?logo=Discord&logoColor=white&longCache=true&style=for-the-badge)](https://lvckyworld.net/discord/)

## Install the Package

First you have to install the package via npm.  
You have to run the command: `npm install @lvckyworld/marina-api`.  
Then you have to import the package.

### Example

#### TypeScript

```ts
import {MarinaAPI} from "@lvckyworld/marina-api"
```

#### JavaScript

```js
const {MarinaAPI} = require("@lvckyworld/marina-api");
```

## Usage Example

```ts
import {MarinaAPI} from "@lvckyworld/marina-api"; // added
import {Message} from "discord.js";
import {LeaveSeverPCommand} from "./module/LeaveSeverPCommand";

export class MessageListener {
    public static async onMessage(message: Message) {
        const prefix = ".";
        if (message.author.bot) return;
        if (!message.content.startsWith(prefix)) return;
        const command = message.content.toLowerCase().slice(prefix.length).split(" ")[0];
        const args = message.content.slice(prefix.length).split(" ").slice(1);

        if (command === "leave") {
            if (!await MarinaAPI.isLvckyWorldAdmin(message.author.id)) return; // added
            new LeaveSeverPCommand().execute(message, args);
        }
    }
}

```
