/**
 * Represents a list of LvckyWorld Admins.
 * @interface
 */
export interface LvckyWorldMember {
    lvckyworld: [
        {
            name: string,
            clid: string,
            role: string,
            roleId: string,
            highestRoleId: string,
            sortId: number
        }
    ]
}

/**
 * Represents a list of LvckyWorld team members.
 * @interface
 */
export interface LvckyWorldTeam {
    "teamMembers": [
        {
            clientname: string,
            clientid: string,
            roleName: string,
            roleId: string,
            highestRoleId: number,
            sortId: number
        }
    ]
}

/**
 * Represents a collection of LvckyWorld GlobalBans.
 * @interface
 */
export interface LvckyWorldGlobalBans {
    globalbans: [
        LvckyWorldGlobalBan
    ]
}

/**
 * Represents a LvckyWorld GlobalBan.
 * @interface
 */
export interface LvckyWorldGlobalBan {
    clientid: string,
    clientavatar: string,
    clientname: string,
    banreason: string,
    bancreatorid: string,
    bancreatorname: string,
    bannedOn: string,
    timestam: string,
    permis: boolean
}

/**
 * Represents a member in Discord.
 * @interface
 */
export interface DiscordMember {
    id: string,
    username: string,
    avatar: string | null,
    avatar_decoration: string | null,
    discriminator: string,
    public_flags: number | null,
    banner: string | null,
    banner_color: string | null,
    accent_color: string | null
}