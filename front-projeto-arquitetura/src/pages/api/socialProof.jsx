export default function handler(req, res) {
  res.status(200).json([
    {
      id: 1,
      name: "João Silva",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce iaculis, sapien id volutpat pulvinar, nisi lacus aliquet sapien, molestie aliquam diam sem in mi. Nam ultricies hendrerit risus. Sed rutrum quam mi, sit amet auctor augue tincidunt sed. Etiam est mauris, blandit vitae ligula a, rhoncus porta libero.",
    },
    {
      id: 2,
      name: "Bianca Santos",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce iaculis, sapien id volutpat pulvinar, nisi lacus aliquet sapien, molestie aliquam diam sem in mi. Nam ultricies hendrerit risus. Sed rutrum quam mi, sit amet auctor augue tincidunt sed. Etiam est mauris, blandit vitae ligula a, rhoncus porta libero.",
    },
    {
      id: 3,
      name: "Pedro Pinheiro",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce iaculis, sapien id volutpat pulvinar, nisi lacus aliquet sapien, molestie aliquam diam sem in mi. Nam ultricies hendrerit risus. Sed rutrum quam mi, sit amet auctor augue tincidunt sed. Etiam est mauris, blandit vitae ligula a, rhoncus porta libero.",
    },
    {
      id: 4,
      name: "Márcia Souza",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce iaculis, sapien id volutpat pulvinar, nisi lacus aliquet sapien, molestie aliquam diam sem in mi. Nam ultricies hendrerit risus. Sed rutrum quam mi, sit amet auctor augue tincidunt sed. Etiam est mauris, blandit vitae ligula a, rhoncus porta libero.",
    },
  ]);
}
