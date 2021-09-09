---
title: "Look around for Wifi on Mac Terminal!"

categories:
  - Linux

tags:
  - Linux
---

<hr>

#### Find and Connect wifi on MacBook terminal


###### First, let's look for available wifi around us!

`
/System/Library/PrivateFrameworks/Apple80211.framework/Versions/A/Resources/airport -s
`

Then you'll see the following

* SSID

* BSSI

* RSSI

* CHANNEL

* HT

* CC

* SECURITY (atuh)

What we are going to use here is `SSID`. Please record the SSID that you would like to connec to.

###### Then, let's choose one and connect!

`
networksetup -setairportnetwork en0 "<SSID>" "<password>"
`

try en1 or en2 instead of en0 if it does not work.