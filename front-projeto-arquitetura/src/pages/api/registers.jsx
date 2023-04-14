// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    res.status(200).json([
      {
        name: "Roberto Carlos",
        email: "meuwix@email.com",
        cell: 99999999999,
        subject: "Meu assunto",
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce iaculis, sapien id volutpat pulvinar, nisi lacus aliquet sapien, molestie aliquam diam sem in mi. Nam ultricies hendrerit risus. Sed rutrum quam mi, sit amet auctor augue tincidunt sed. Etiam est mauris, blandit vitae ligula a, rhoncus porta libero. Aliquam felis magna, consequat sit amet scelerisque sit amet, vehicula non magna. Nunc euismod justo nec leo molestie, vitae condimentum leo tincidunt.",
        read: true
      },
      {
        name: "Carlos Roberto",
        email: "meuwix2@email.com",
        cell: 88888888888,
        subject: "Meu assunto 2",
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce iaculis, sapien id volutpat pulvinar, nisi lacus aliquet sapien, molestie aliquam diam sem in mi. Nam ultricies hendrerit risus. Sed rutrum quam mi, sit amet auctor augue tincidunt sed. Etiam est mauris, blandit vitae ligula a, rhoncus porta libero. Aliquam felis magna, consequat sit amet scelerisque sit amet, vehicula non magna. Nunc euismod justo nec leo molestie, vitae condimentum leo tincidunt.",
        read: false
      },
      {
        name: "Julia Santos",
        email: "meuwix3@email.com",
        cell: 77777777777,
        subject: "Meu assunto 3",
        message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce iaculis, sapien id volutpat pulvinar, nisi lacus aliquet sapien, molestie aliquam diam sem in mi. Nam ultricies hendrerit risus. Sed rutrum quam mi, sit amet auctor augue tincidunt sed. Etiam est mauris, blandit vitae ligula a, rhoncus porta libero. Aliquam felis magna, consequat sit amet scelerisque sit amet, vehicula non magna. Nunc euismod justo nec leo molestie, vitae condimentum leo tincidunt.",
        read: true
      }
    ]);
  }
  