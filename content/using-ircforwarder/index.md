---
title: Using IRCForwarder
author: Ryan
type: page
date: 2015-12-13T19:23:33+00:00
sharing_disabled:
  - "1"
switch_like_status:
  - "1"

---
If you&#8217;re here, I assume you want to setup an IRCForwarder. This is a little Java utility you can put on a server which will forward all messages to a web socket to a specified IRC Server, and vice versa. In order to do this, you&#8217;ll need a couple of things:

  * A server to put the IRCForwarder on
  * Java 8
  * An SSL Certificate to secure the websocket (optional)

Unfortunately, the forwarder cannot connect to an irc server securely yet &#8211; this may come in a future update to the forwarder.

Using the forwarder is as follows:

  1. Upload the jar to your server (get it at <http://rymate.co.uk/dl/IRCForwarder.jar>)
  2. Run the jar file as follows &#8211; java -jar IRCForwarder.jar <irc server> <irc port> <websocket port> replacing the placeholders with the values you want
  3. Connect using WinIRC to the IP of the ircforwarder server and the websocket port.

If you want to secure the websocket, use nginx or apache2 to proxypass requests from https to your websocket. An example config for nginx is shown below:



This config may need some editing to get it working with your setup.