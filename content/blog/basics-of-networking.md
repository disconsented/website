+++
title = "All The Things They Don't Tell You About Port Forwarding."
description = "A guide to understanding port forward for the diligent learner."
date = 2021-04-20T09:19:42+00:00
updated = 2021-04-20T09:19:42+00:00
draft = false
[taxonomies]
year = ["2023"]
categories = ["Networking"]
[extra]
toc=true
+++
## Preface
Frequently across varying game hosting communities I see folks trying to start hosting servers for their friends but typically running into the same sets of roadblocks, blindly following poorly written guides & videos.

Instead of getting grumpy, trying to explain the process for the Nth time, I've decided to (shockingly) write out a guide to hopefully help folks, help themselves.
<!-- more -->

Given my years of experience inside varying Minecraft Server communities (shout out to Syscraft), running my Infrastructure as a Service (PixelPond.io) & my experience in Residential Access Networks, I figured it was time to impart a bit of wisdom.

The goal of this guide is to explain enough for folks to get started, with a focus on teaching a set of tools (both software and logical) to diagnose their home networks.

What this guide, _isn't_, is a complete guide to port forwarding with X ISP or Y CPE. Due diligence on the part of the reader is expected, this is fork feeding, not spoon-feeding.

## What is N.A.T?
N.A.T. or Network Address Translation (like most acronyms) is quite a literally named. In a nutshell, it's the idea that a network device can take a request and then _translate_ it to another address.

The way it works is by modifying the Source I.P. and Destination I.P. segments of the packet and forwarding it along the network.

Typically, the C.P.E. figure out how & where to translate the incoming address by looking at the Destination. It will then modify that to point towards another device and forward that along.

Say you get a packet that looks like:

| Source Address  | Source Port | Destination Address | Destination Port |
| --------------- | ----------- | ------------------- | ---------------- |
| 123.123.123.123 | 25565       | 10.0.0.1            | 25565            |


Your CPE may then have a NAT table that looks like:

| Source Address | Source Port | Destination Address | Destination Port |
| -------------- | ----------- | ------------------- | ---------------- |
| 0.0.0.0        | 25565       | 192.168.1.20        | 25565            |
| 10.0.0.1       | 80          | 192.168.1.20        | 8080             |


In this case, it has two rules:

1) Will translate _any_ traffic (more on this later) to a local (LAN) server.
2) Will translate traffic from _one_ source, to a local server with a different port.

From there, it can modify the packet to:

| Source Address | Source Port | Destination Address | Destination Port |
| -------------- | ----------- | ------------------- | ---------------- |
| 10.10.10.10    | 25565       | 192.168.1.20        | 25565            |


So, it's rewritten the Destination Address and forwarded the packet on its mary way. It was able to do so because it had been told what to do via the NAT table.

In practice, this is the mechanism that lets people access services behind a C.P.E. (Router) in IPv4 networks. IPv6 doesn't use the concept of NAT because each device has its own (public) address.

However, this mechanism doesn't always work for varying reasons. We'll touch on the two most common ones here, “Hairpin N.A.T.” and C.G.N.A.T.
## Hairpin NAT, alternatively, why you don't test from your port forward from your LAN
Hairpin NAT is the idea of communicating to a local host behind the same NAT device (CPE). E.g., connecting to a local server by using the WAN address of the CPE.

Why did I include this? Well, I've noticed that folks who are new to dealing with home networks tend to think that using your CPE's WAN address is a good way to test your port forward.

In reality, attempting to test this way achieves nothing beyond verifying that your Hairpin NAT works. It's convenient in some cases, but ultimately a red herring.

## CGNAT, the other big scary NAT
CGNAT, or Carrier Grade NAT, is a way for ISPs to save money on paying for an IP address for each customer. It works much the same way as regular NAT, but instead of it operating on your CPE, it operates on a network appliance somewhere in your provider's network. Unfournatley, you have no direct influence over how it operates. Consequently, you cannot port forward when your ISP is using CGNAT.

It is trivial to establish if you're stuck behind CGNAT, you'll see that your CPEs WAN address is different to what services will report your WAN address as.

I.e., say your CPE has an WAN address of `10.0.0.25` & a service like [icanhazip](https://icanhazip.com/) says your address is `123.123.123.123` you're stuck behind CGNAT.

Fret not,  you can work around this via “Tunneling” although, we won't dive into this topic here.
## What is Quad 0
Remember that weird address from the NAT table before, `0.0.0.0`?  It's a special address in many special rules depending on the context, but here it has one relevant meaning. _Anything_, why do we care? Because it's the only address we should ever bind a server to.
## Address Binding
Have you ever noticed how some servers let you specify an address?
> E.g. `server-ip=`

When you specify a value
## Private/LAN Address
## Public/WAN Address
## IPv4 & IPv6
## OSI Model

    7, application

## MAC Binding (I.E. how does the router know where to direct traffic)
CPE may internally statically resolve the
## TCP Dump & Wireshark
## Firewall Logs
## Glossary

### <abbr title="Internet Service Provider">ISP</abbr>
### <abbr title="Customer Premises Equipment">CPE</abbr>
### <abbr title="Address Resolution Protocol">ARP</abbr>
### <abbr title="Media Access Control">MAC Address</abbr>
### <abbr title="Wide Area Network">WAN</abbr>
### <abbr title="Local Area Network">LAN</abbr>
### Router
### Switch
### Quad 0
    
    
    
    

Addendum 1—Fail to Bind

    Address port pair is already in use
    No adapters with an address
    You bound to an address not Quad0
