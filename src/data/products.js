const products = [
  {
    id: 9,
    name: "Fone Bluetooth TechWave X200",
    img: "/imgs/fone.jpg",
    price: 299.90,
    category: "electronics",
    description: "Fone sem fio com cancelamento de ruído e até 30h de bateria.",
    size: "Ajustável",
    rating: 4.8,
    ratingAmount: 32,
    reviews: [
      {
        id: 11,
        rating: 5,
        date: "21-08-2025",
        review: "Som limpo e graves ótimos!"
      },
      {
        id: 12,
        rating: 4.5,
        date: "06-08-2025",
        review: "Confortável e a bateria dura bastante."
      }
    ],
    tag: null
  },
  {
    id: 1,
    name: "Mouse Gamer RGB GX-500",
    img: "/imgs/mouse.jpg",
    price: 149.90,
    category: "accessories",
    description: "Mouse gamer com 7 botões programáveis e iluminação RGB.",
    size: "12cm",
    rating: 0,
    ratingAmount: 0,
    reviews: [],
    tag: "Novo"
  },
  {
    id: 2,
    name: "Notebook Ultra Slim 14”",
    img: "/imgs/notebook.jpg",
    price: 3899.90,
    category: "electronics",
    description: "Notebook leve com Intel i5, 8GB RAM e SSD 512GB.",
    size: "14\"",
    rating: 5,
    ratingAmount: 40,
    reviews: [
      {
        id: 20,
        rating: 5,
        date: "17-06-2025",
        review: "Rápido e silencioso, ótimo para trabalho."
      },
      {
        id: 21,
        rating: 5,
        date: "11-06-2025",
        review: "Chegou bem embalado e com excelente acabamento."
      }
    ],
    tag: null
  },
  {
    id: 3,
    name: "Caixa de Som Bluetooth SoundBox",
    img: "/imgs/som.jpg",
    price: 399.00,
    category: "electronics",
    description: "Graves potentes, bluetooth 5.0 e até 20h de reprodução.",
    size: "20cm",
    rating: 4.7,
    ratingAmount: 23,
    reviews: [
      {
        id: 30,
        rating: 4.5,
        date: "14-06-2025",
        review: "Volume alto e som claro."
      },
      {
        id: 31,
        rating: 5,
        date: "01-06-2025",
        review: "Perfeita para festas em casa!"
      }
    ],
    tag: "Promo"
  },
  {
    id: 4,
    name: "Kit 3 Cabos USB-C Turbo",
    img: "/imgs/cabo.jpg",
    price: 59.90,
    category: "accessories",
    description: "Trio de cabos USB-C de carregamento rápido.",
    size: "1m cada",
    rating: 0,
    ratingAmount: 0,
    reviews: [],
    tag: "Novo"
  },
  {
    id: 5,
    name: "Teclado Mecânico RGB",
    img: "/imgs/teclADO.jpg", // atenção ao nome do arquivo conforme o print
    price: 299.00,
    category: "accessories",
    description: "Switches vermelhos e iluminação RGB personalizável.",
    size: "44cm",
    rating: 5,
    ratingAmount: 48,
    reviews: [
      {
        id: 50,
        rating: 5,
        date: "29-08-2025",
        review: "Resposta rápida, ótimo para digitação e jogos."
      },
      {
        id: 51,
        rating: 5,
        date: "05-04-2025",
        review: "RGB muito bonito no setup."
      }
    ],
    tag: "Promo"
  },
  {
    id: 6,
    name: "Carregador Portátil 20.000mAh",
    img: "/imgs/carregador.jpg",
    price: 189.90,
    category: "accessories",
    description: "Powerbank compacto com USB-C e alta capacidade.",
    size: "10cm",
    rating: 4.5,
    ratingAmount: 19,
    reviews: [
      {
        id: 60,
        rating: 4.5,
        date: "18-06-2025",
        review: "Carrega rápido e aguenta o dia todo."
      },
      {
        id: 61,
        rating: 4,
        date: "02-05-2025",
        review: "Poderia ser mais leve, mas funciona muito bem."
      }
    ],
    tag: null
  },
  {
    id: 7,
    name: "Headset Gamer 7.1",
    img: "/imgs/headset.jpg",
    price: 229.90,
    category: "electronics",
    description: "Áudio 7.1 e microfone removível para jogos e calls.",
    size: "17cm",
    rating: 4.0,
    ratingAmount: 12,
    reviews: [
      {
        id: 70,
        rating: 4.5,
        date: "10-07-2025",
        review: "Som imersivo, muito bom para FPS."
      },
      {
        id: 71,
        rating: 4,
        date: "07-07-2025",
        review: "Confortável, depois de alguns ajustes."
      }
    ],
    tag: null
  },
  {
    id: 8,
    name: "Smartwatch Fit Pro 42mm",
    img: "/imgs/smartwatch.jpg",
    price: 649.90,
    category: "electronics",
    description: "Monitoramento de saúde, GPS e resistência à água.",
    size: "42mm",
    rating: 5,
    ratingAmount: 8,
    reviews: [
      {
        id: 80,
        rating: 5,
        date: "29-08-2025",
        review: "Métricas bem precisas, uso diário."
      },
      {
        id: 81,
        rating: 5,
        date: "14-08-2025",
        review: "Excelente custo-benefício."
      }
    ],
    tag: null
  }
];

export default products;

