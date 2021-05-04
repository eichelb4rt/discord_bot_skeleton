import dotenv from "dotenv";
dotenv.config();

export default class Config {
	////////////////////////////////////////////////////////////////
	// APIs
	////////////////////////////////////////////////////////////////

	static readonly BrawlAPI = "https://api.brawlhalla.com";
	static readonly DISCORD_API_TOKEN = process.env.DISCORD_API_TOKEN;

	////////////////////////////////////////////////////////////////
	// Discord Config stuff
	////////////////////////////////////////////////////////////////

	static readonly embed_colour = '#002154';

	////////////////////////////////////////////////////////////////
	// Commands
	////////////////////////////////////////////////////////////////

	static readonly publicCommandsDir = 'commands';
	static readonly secretCommandsDir = 'secret_commands';
	static readonly commandDirs = [
		Config.publicCommandsDir,
		Config.secretCommandsDir
	];
}