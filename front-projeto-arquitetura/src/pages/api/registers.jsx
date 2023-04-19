// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    res.status(200).json([
      {
        id: 1,
        name: "Roberto Carlos",
        email: "meuwix@email.com",
        phone: 99999999999,
        city: "Santo Anastácio",
        subject: "Meu assunto",
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce iaculis, sapien id volutpat pulvinar, nisi lacus aliquet sapien, molestie aliquam diam sem in mi. Nam ultricies hendrerit risus. Sed rutrum quam mi, sit amet auctor augue tincidunt sed. Etiam est mauris, blandit vitae ligula a, rhoncus porta libero. Aliquam felis magna, consequat sit amet scelerisque sit amet, vehicula non magna. Nunc euismod justo nec leo molestie, vitae condimentum leo tincidunt.",
        read: true
      },
      {
        id: 2,
        name: "Carlos Roberto",
        email: "meuwix2@email.com",
        phone: 88888888888,
        city: "Santo Anastácio",
        subject: "Meu assunto 2",
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce iaculis, sapien id volutpat pulvinar, nisi lacus aliquet sapien, molestie aliquam diam sem in mi. Nam ultricies hendrerit risus. Sed rutrum quam mi, sit amet auctor augue tincidunt sed. Etiam est mauris, blandit vitae ligula a, rhoncus porta libero. Aliquam felis magna, consequat sit amet scelerisque sit amet, vehicula non magna. Nunc euismod justo nec leo molestie, vitae condimentum leo tincidunt.",
        read: false
      },
      {
        id: 3,
        name: "Julia Santos",
        email: "meuwix3@email.com",
        phone: 77777777777,
        city: "Santo Anastácio",
        subject: "Meu assunto 3",
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce iaculis, sapien id volutpat pulvinar, nisi lacus aliquet sapien, molestie aliquam diam sem in mi. Nam ultricies hendrerit risus. Sed rutrum quam mi, sit amet auctor augue tincidunt sed. Etiam est mauris, blandit vitae ligula a, rhoncus porta libero. Aliquam felis magna, consequat sit amet scelerisque sit amet, vehicula non magna. Nunc euismod justo nec leo molestie, vitae condimentum leo tincidunt.",
        read: true
      }
    ]);
  }
  