
export default function handler(req, res) {
    res.status(200).json([
      {
        id: "1",
        name: "Monkey",
        value: "25.000",
        image: "Monkey.png",
        describe: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      },
      {
        id: "2",
        name: "Pig",
        value: "85.000",
        image: "Pig.png",
        describe: "Pig NFT",
      },
      {
        id: "3",
        name: "Soldier",
        value: "95.000",
        image: "Soldier.png",
        describe: "Soldier NFT",
      }
    ])
  }
  