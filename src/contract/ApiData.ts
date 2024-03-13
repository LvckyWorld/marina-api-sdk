/**
 * Represents a list of LvckyWorld team members.
 * @interface
 */
export interface TeamMember {
    member_name: string,
    member_id: string,
    highest_role_id: string,
    highest_role_name: string,
    highest_role_position: number,
    sort_id: number,
    is_admin: boolean,
}

/**
 * Represents a collection of LvckyWorld GlobalBans.
 * @interface
 */
export interface GlobalBans {
    globalbans: [
        GlobalBan
    ]
}

/**
 * Represents a LvckyWorld GlobalBan.
 * @interface
 */
export interface GlobalBan {
    member_id: string,
    member_avatar: string,
    member_name: string,
    ban_reason: string,
    ban_creator_id: string,
    ban_creator_name: string,
    banned_on_guild_name: string,
    banned_on_guild_id: string,
    timestamp: string,
    special_permit: boolean
}

/**
 * Represents the schema for an old global ban.
 * @interface OldGlobalBanSchema
 */
export interface OldGlobalBanSchema {
    clientid: string,
    clientavatar: string,
    clientname: string,
    banreason: string,
    bancreatorid: string,
    bancreatorname: string,
    bannedOn: string,
    timestamp: string,
    permis: boolean
}


/**
 * Represents a member in Discord.
 * @interface
 */
export interface DiscordUserData {
    id: string,
    username: string,
    avatar: string | null,
    discriminator: string,
    public_flags: number | null,
    premium_type: number | null,
    flags: number | null,
    global_name: string | null,
    avatar_decoration_data: string | null,
    banner: string | null,
    banner_color: string | null,
    accent_color: string | null
}