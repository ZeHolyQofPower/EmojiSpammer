## Restarting the Service

First, just switch into root. All of these are kernal commands and all require authentication, so don't torture yourself.

`sudo -s` logs you in as root user.

`systemctl daemon-reload` re-sources the service file.


`systemctl start emojispammer` starts and checks service file.

`systemctl enable emojispammer` begins running service.

`journalctl -u emojispammer` checks the console logs.

## Future Adam
All your friends that wanted to contribute to this? They all dislike Javascript. Use the Python API in the future.
