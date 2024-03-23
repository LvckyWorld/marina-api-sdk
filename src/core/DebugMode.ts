export class DebugMode {
    public static logDebugLine(log: string, debug: boolean = false) {
        if (debug) {
            console.log(log);
        }
    }
}