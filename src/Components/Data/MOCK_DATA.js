const MOCK_DATA = [
  {
    id: 1,
    name: "Norway",
    text: "text1",
    title: "Scandinavia",
    flag:
      "https://upload.wikimedia.org/wikipedia/commons/2/2a/Flag_of_scandinavia.png",
    info: {
      country: "Scandinavia",
      question: "What activities can you do?",
      title: "Go whale watching in Norway and Iceland",
      paragraph:
        "In Scandinavia, whale watching is popular among tourists, and travelers choose to go whale watching on a whale safari during their vacation in Scandinavia. You might spot Minke whales, blue whales, orcas, and more!",
      photo:
        "https://www.northsailing.is/wp-content/uploads/2017/12/gardar-breaching-humpback-1024x683.jpg"
    },
    info2: {
      title: "Go Skiing in Norway",
      paragraph: "Winter attractions in Scandinavia? Yes, right here. For your winter vacation, this is a must. Famous from the 1994 Winter Olympics, Norway's Lillehammer area is known for the spectacular local ski terrain and the many local winter sports activities.",
      photo: "https://www.fjords.com/wp-content/uploads/2017/11/DSC_0441-2000x1200.jpg"
    }
  },
  {
    id: 2,
    name: "Canada",
    text: "text2",
    title: "Canada",
    flag:
      "http://www.pngall.com/wp-content/uploads/2016/06/Canada-Flag-Free-Download-PNG.png",
    info: {
      country: "Canada",
      question: "What activities can you do?",
      title: "Glacier skywalk",
      paragraph:
        "If you’re after an adrenaline rush, look no further than Banff’s Glacier Skywalk. Known as the location ‘where eagles soar’, the skywalk is suspended between sheer cliffs and a 918 foot drop into a glacier below.",
      photo:
        "https://i.pinimg.com/originals/bd/29/7f/bd297f8c0ae91a9436e12f174584f47b.jpg"
    },
    info2: {
      title: "West Coast Trail, Vancouver Island",
      paragraph: "Canada's West Coast shoreline is some of the country's most spectacular landscape. Thankfully much of it has been preserved as Pacific Rim National Park, including the famous West Coast Trail.",
      photo: "https://www.tripsavvy.com/thmb/HMpFEOSiqwsJM54H0mQKcDQC82c=/800x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-152837645-5a00ab6a89eacc0037dda66f.jpg"
    }
  },
  {
    id: 3,
    name: "Russia",
    text: "text3",
    title: "Russia",
    flag:
      "https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Russia.png",
    info: {
      country: "Russia",
      question: "What activities can you do?",
      title: "Diving in russian waters",
      paragraph:
        "Diving has become one of the trendiest varieties of extreme tourism in Russia. As many as 15,000 Russians practice diving. They enjoy diving not only in warm seas - the Black Sea, but also in cold waters of the Arctic Ocean.",
      photo:
        "https://cdni.rbth.com/rbthmedia/images/2018.05/original/5afc142185600a2c0341889b.jpg"
    },
    info2: {
      title: "Travel to the North Pole from Murmansk",
      paragraph: "Moscow and St. Petersburg might feel cold, but they’ve got nothing on Franz Josef Land, a distant Russian archipelago in the Arctic Ocean. Franz Josef Land was once the embarkation point for North Pole explorers and where many of those brave souls met their end.",
      photo: "https://35aqobgy79qkq7w3vokgfa6l-wpengine.netdna-ssl.com/wp-content/uploads/2019/06/Dietmat-Denger-photo.jpg"
    }
  },
  {
    id: 4,
    name: "Greenland",
    text: "text4",
    title: "Greenland",
    flag:
      "https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_Greenland.svg",
    info: {
      country: "Greenland",
      question: "What activities can you do?",
      title: "Heliskiing to ski from the highest places",
      paragraph:
        "A helicopter will take you up to the peaks giving you views of glaciers, mountains and the sea. Greenland Extreme will bring ski enthusiasts up to the mountain tops.A skiing adventure with views that are quite out of the ordinary.",
      photo:
        "https://www.eaheliskiing.com/admin/resources/023greenlandheliskiingkevin-boekholt-w1500.jpg"
    },
    info2: {
      title: "When the kayak arrived in Greenland",
      paragraph: "The kayak is a transportation and hunting tool that originated in the Arctic region and then spread east towards Greenland with the first wave of immigrants, who came to this country more than 4000 years ago.",
      photo: "https://visitgreenland.com/wp-content/uploads/pgi-greenland-kayakers-on-a-coffee-break-among-icebergs-in-the-disko-bay-in-greenland.jpg"
    }
  },
  {
    id: 5,
    name: "Antarctica",
    text: "text5",
    title: "Antarctica",
    flag:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Proposed_flag_of_Antarctica_%28Graham_Bartram%29.svg/744px-Proposed_flag_of_Antarctica_%28Graham_Bartram%29.svg.png",
    info: {
      country: "Antarctica",
      question: "What activities can you do?",
      title: " Kayak past icebergs and penguins",
      paragraph:
        "Breathtaking to witness the wonders of Antarctica from a ship, kayaking puts you directly in the middle of the action. Kayakers have the chance to see floating icebergs, leopard seals, penguins, and whales up close and personal.",
      photo:
        "https://previews.agefotostock.com/previewimage/medibigoff/11806f0f709500561e4b2e2756e4e621/x8b-915417.jpg"
    },
    info2: {
      title: "Camp under the stars",
      paragraph: "Antarctica offers a unique set of challenges and dangers to people who want to camp under the stars. Although campers must sleep on the snow in sub-zero weather.",
      photo: "https://media.gadventures.com/media-server/cache/3b/f5/3bf5c4d4369b8af4d9e9c8f78feabb26.jpg"
    }
  },
  {
    id: 6,
    name: "Australia",
    text: "text6",
    title: "Australia",
    flag:
      "https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/Flag_of_Australia.svg/800px-Flag_of_Australia.svg.png",
    info: {
      country: "Australia",
      question: "What activities can you do?",
      title: "Raft the Franklin River, Tasmania",
      paragraph:
        "Tasmania's ravishing Word Heritage Area, the mighty Franklin River is the setting for one of the world's great rafting adventures. It's cool entertainment which you never forget because it takes more than 2 hours of ustoppable rafting",
      photo:
        "https://www.franklinrivertasmania.com/wp-content/uploads/corkscrew-red-boat1.jpg"
    },
    info2: {
      title: "Dive with great white shark",
      paragraph: "Bay Charters, South Australia. Feel one of the most dangerous feelings, diving with sharks. Great whites might be very aggressive and who knows whose cage, they start biting.",
      photo: "https://www.divediscovery.com/images/cover_pic_sharkdiving2.jpg"
    }
  }
];
export default MOCK_DATA;
