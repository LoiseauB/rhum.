export type BottleType = {
  id: number;
  name: string;
  country: string;
  description: string;
  categoryId: number;
  avgRating: number;
  comments: {
    id: number;
    comment: string;
    userId: number;
    user: {
      pseudo: string;
    };
  }[];
};

export const rumComments = [
  {
    pseudo: 'RhumLover92',
    comment:
      "Ce rhum est tout simplement délicieux, j'adore ses notes de vanille et d'épices!",
  },
  {
    pseudo: 'TropicalExplorer',
    comment:
      'Le rhum de cette région est vraiment exceptionnel, chaque bouteille raconte une histoire unique.',
  },
  {
    pseudo: 'GourmetRhum',
    comment:
      'Je recommande vivement ce rhum pour sa qualité et son goût authentique.',
  },
  {
    pseudo: 'PartyTime',
    comment:
      'Un vrai régal pour les papilles, ce rhum est parfait pour une soirée entre amis.',
  },
  {
    pseudo: 'RhumConnoisseur',
    comment:
      "J'ai été agréablement surpris par la richesse des arômes de ce rhum, c'est une véritable découverte.",
  },
  {
    pseudo: 'RelaxationExpert',
    comment:
      "Rien de tel qu'un bon verre de rhum pour se détendre après une longue journée de travail.",
  },
  {
    pseudo: 'CaribbeanDreamer',
    comment:
      "Ce rhum me rappelle mes vacances dans les Caraïbes, c'est comme un voyage en bouteille!",
  },
  {
    pseudo: 'BalancedTaste',
    comment:
      'Un rhum parfaitement équilibré, idéal à déguster en toute occasion.',
  },
  {
    pseudo: 'DistilleryVisitor',
    comment:
      "J'ai eu la chance de visiter la distillerie où ce rhum est produit, une expérience inoubliable!",
  },
  {
    pseudo: 'RumCollector',
    comment:
      'Ce rhum a définitivement gagné une place dans ma collection personnelle, je le recommande à tous les amateurs.',
  },
  // Add more comments here if needed
];
