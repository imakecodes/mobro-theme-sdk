import io from "socket.io-client";

export default class Socket {
    url = null;
    socket = null;
    isConnected = false;

    constructor() {
        this.url = `${window.location.protocol}//${window.location.hostname}:42100`;
        this.socket = io(`${window.location.protocol}//${window.location.hostname}:42100${window.location.search}`);

        this.on("change:theme", (data) => {
            console.info("Switching theme to", data.theme);

            fetch(`${this.url}/theme?theme=${data.theme}`)
                .then(() => {
                    console.info("Reloading due to theme switch ...");
                    window.location = `/${window.location.search}`;
                })
                .catch((error) => {
                    console.error("Could not switch themes", error);
                });
        });

        this.on("connect", () => {
            this.isConnected = true;
        });

        this.on("disconnect", () => {
            this.isConnected = false;
        })
    }

    on(...args) {
        this.socket.on(...args);
    }

    off(...args) {
        this.socket.off(...args);
    }
}