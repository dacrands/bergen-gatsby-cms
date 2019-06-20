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
mentors:
  - email: bmadden@bergen.edu
    name: ' Professor Bill Madden'
blog:
  - body: >-
      Today Cesar and Leyki took 10 1TB portable hard drives and used Rufus to
      flash an operating system called PelicanHPC onto them. We have chosen
      PelicanHPC because it is an optimized version of Linux which is capable of
      efficient partitioning of data to send to the computational nodes and
      retrieving the partitions to display on the monitor in a fast way. Once we
      installed the operating system on the hard drives, Cesar and Leyki plugged
      them into all the computers. For each computer, we turned it on, and
      pressed the esc key on the keyboard to enter the boot order menu. We
      changed the boot order to boot from network for the reason of having the
      computers turn on when one computer turns on, i.e. the front end computer.
      When all the computers were running pelican HPC and were booting from the
      internal network, we wanted the front end to take control of the
      processing power of the other 10 computers. In order to do this, Cesar
      typed the command “pelican_setup” and the operating system searched for
      other computational nodes through the eth0 port which was connected to the
      ethernet switch and the ethernet switch held the ethernet cables to
      transport data from all the other computers. The operating system detected
      all 10 nodes and took control of their CPUs for processing.
    date: 2019-05-21T15:51:11.922Z
    title: Week 2
    image: /img/bergen-stem-graphic.jpg
  - body: "Our Project is to build a Supercomputer out of a desktop cluster. A supercomputer is a single computer that is connected to several other computers to partition a large computational problem to send a partition to each connected computer to compute and solve the job given and send the answer back to the sender. The main computer collects the data received and outputs the answer in a fraction of the time it would take a single computer to compute the same job. For example: if a user wants to compute prime numbers from a range of 1 to 100,000; a single computer would take days to weeks to complete the computation. A supercomputer would partition the job so, if there are 10 computers connected, each computer would only have to compute 10,000 numbers each and it would compute the tasks 10 times as fast. In order to achieve this concept, Leyki and I (henceforth referred to as the Supercomputer Team) will take 11 computers and wire them to make them communicate with each other.\r\n\n\r\n\nToday the Supercomputer Team has acquired 11 i5 HP PC computers, Ethernet Cables (to transport data to and from the connected computers), a gigabyte switch to allow the data from the ethernet cables to flow to other computers and the main computer, and portable hard drives to load an operating system from instead of the build in windows one. All the supplies were provided through the Bergen Community College classroom. The Supercomputer Team then lined up the computers in a row and connected all 10 computers to the Ethernet switch. Therefore, the team completed the hardware design of our supercomputer prototype."
    date: 2019-05-20T16:19:09.039Z
    title: Week 1
    image: /img/bergen-stem-graphic.jpg
---

