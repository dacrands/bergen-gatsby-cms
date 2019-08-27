---
templateKey: projectTemplate
title: Implementing Parallel Processing on Desktop Clusters
image: /img/parallel-processing.jpeg
abstract: >-
  Following success in designing and building a 4-unit Raspberry Pi cluster, we
  scaled the design up to include 8 nodes. We then proceeded to design and build
  a desktop PC version utilizing 11 available desktop machines.  This is being
  done to achieve penalization for processing information to achieve industrial
  and professional performance to commutate large, computational intensive
  information for Bergen Community College STEM to utilize.
meeting: 'Monday - Thursday from 9:00 a.m to 1:00 p.m in room S-243'
students:
  - email: chernandez108192@me.bergen.edu
    name: Cesar Hernandez
  - email: lreynoso111415@me.bergen.edu
    name: Leyki Reynoso Jr.
  - email: tbd
    name: Vinny Bucceri
  - email: tbd
    name: 'Zion Keitt '
mentors:
  - email: bmadden@bergen.edu
    name: ' Professor Bill Madden'
blog:
  - body: "We have come to the hypothesis that the computers aren’t communicating because the program in which the test stress was done, Octave, does not support clustering, but when we used Ipython which is built in PelicanHPC and made for clustering, it kept getting the same processing time.\r\n\nTo find out what the mistake was we tried different scenarios.\r\n\nDisconnected the switch from the internet to see if it was somehow interfering with the local server, but there wasn’t any different. The front end kept detecting the nodes, but the processing time kept being the same.\r\n\nWhen disconnected one of the eth cables from the front node the connection with the compute nodes was inconsistent jumping between 0 and 2 nodes, supporting the hypothesis that the switch is not communicating properly. There is no difference in accessing from eth0 or eth1, both show the same inconsistency."
    date: 2019-06-10T15:56:32.739Z
    title: Week 4
    image: ''
  - body: >-
      For the past three days, the Supercomputer Team has run diagnostics to
      figure out how to solve the issue of the main computer not recognizing the
      computational nodes in our cluster. We have installed two Network
      Interface Cards (NIC) into our front end computer to allow for access to
      the computational nodes and the internet through two ethernet cables. The
      Supercomputer Team has disconnected the internet ethernet cable and ran
      “pelican_setup” in the PelicanHPC terminal. This resulted in a message
      saying the ethernet switch device is not active even though the lights on
      the switch were definitely on. This message caused the front end to lose
      its connection to the other computational nodes. In order to regain
      connection, the Team proceeded to ssh into the root terminal through all
      the computational nodes in order for the front end node to regain sight of
      them. Then front end did not see then nodes. The Team then went into the
      Bios of all the computers to check if any of the boot orders were changed
      from network. All the computers were functioning as expected. We then
      moved our attention to the code the team ran in GNUOctave and tried to
      download a parallelism package to make sure the code would take advantage
      of our computational nodes. In using the command “pkg install -forge
      parallel” into the command line and an error message appeared stating it
      could not access the url. Then Team decided to think about a solution to
      the challenge and tackle it the following week.


      ![](/img/screen-shot-2019-08-27-at-3.39.48-pm.png)
    date: 2019-06-03T19:38:14.415Z
    title: 'Week 3 '
    image: /img/screen-shot-2019-08-27-at-3.39.18-pm.png
  - body: >-
      Today Cesar and Leyki took 10 1TB portable hard drives and used Rufus to
      flash an operating system called PelicanHPC onto them. We have chosen
      PelicanHPC because it is an optimized version of Linux which is capable of
      efficient partitioning of data to send to the computational nodes and
      retrieving the partitions to display on the monitor in a fast way. 




      Once we installed the operating system on the hard drives, Cesar and Leyki
      plugged them into all the computers. For each computer, we turned it on,
      and pressed the esc key on the keyboard to enter the boot order menu. We
      changed the boot order to boot from network for the reason of having the
      computers turn on when one computer turns on, i.e. the front end
      computer. 




      When all the computers were running pelican HPC and were booting from the
      internal network, we wanted the front end to take control of the
      processing power of the other 10 computers. In order to do this, Cesar
      typed the command “pelican_setup” and the operating system searched for
      other computational nodes through the eth0 port which was connected to the
      ethernet switch and the ethernet switch held the ethernet cables to
      transport data from all the other computers. The operating system detected
      all 10 nodes and took control of their CPUs for processing.
    date: 2019-05-27T15:51:11.922Z
    title: Week 2
    image: /img/super-pc-week-2.png
  - body: >-
      Our Project is to build a Supercomputer out of a desktop cluster. A
      supercomputer is a single computer that is connected to several other
      computers to partition a large computational problem to send a partition
      to each connected computer to compute and solve the job given and send the
      answer back to the sender. The main computer collects the data received
      and outputs the answer in a fraction of the time it would take a single
      computer to compute the same job. 


      For example: if a user wants to compute prime numbers from a range of 1 to
      100,000; a single computer would take days to weeks to complete the
      computation. A supercomputer would partition the job so, if there are 10
      computers connected, each computer would only have to compute 10,000
      numbers each and it would compute the tasks 10 times as fast. In order to
      achieve this concept, Leyki and I (henceforth referred to as the
      Supercomputer Team) will take 11 computers and wire them to make them
      communicate with each other.


      Today the Supercomputer Team has acquired 11 i5 HP PC computers, Ethernet
      Cables (to transport data to and from the connected computers), a gigabyte
      switch to allow the data from the ethernet cables to flow to other
      computers and the main computer, and portable hard drives to load an
      operating system from instead of the build in windows one. All the
      supplies were provided through the Bergen Community College classroom. The
      Supercomputer Team then lined up the computers in a row and connected all
      10 computers to the Ethernet switch. Therefore, the team completed the
      hardware design of our supercomputer prototype.


      ![](/img/screen-shot-2019-08-27-at-3.27.02-pm.png)
    date: 2019-05-20T16:19:09.039Z
    title: Week 1
    image: /img/super-pc-week-1.jpg
---

