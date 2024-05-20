type ProjectType = {
  id: string;

  title: string;
  description: string;
  shortDescription: string;
  image: {
    url: string;
    alt?: string;
  };
  technologies: {
    technologie: string;
  }[];
  figma?: string;
  deploy?: string;
  github?: string;
};

export type { ProjectType };
