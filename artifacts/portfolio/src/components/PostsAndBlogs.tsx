import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Calendar, MessageSquare, Heart } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  link: string;
  thumbnail?: string;
  embedUrl?: string;
}

const posts: BlogPost[] = [
  {
    id: 2,
    title: "CPHI Worldwide 2023: Booth Design",
    excerpt: "Designing a stall for Dr. Reddy's Active Pharmaceutical Ingredients (API) at CPHI Worldwide 2023.",
    date: "April 28, 2024",
    category: "Space Design",
    link: "#",
    embedUrl: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7123739260402249729?compact=1"
  },
  {
    id: 3,
    title: "An affinity for bamboo",
    excerpt: "I would like to share with you my journey with bamboo and my experiences with the people I met along the way. It all started in 2018 at the Auroville Bamboo Center.",
    date: "June 11, 2023",
    category: "Sustainable Design",
    link: "https://medium.com/@bamboomade/an-affinity-for-bamboo-63aa2deb7d25",
    thumbnail: "https://miro.medium.com/v2/da:true/resize:fit:792/0*vwumfZNk9bgJKQMF"
  },
  {
    id: 4,
    title: "Letter to Mother Earth",
    excerpt: "A heartfelt message to our planet, emphasizing the importance of environmental preservation and the interconnectedness of all life forms.",
    date: "May 2, 2025",
    category: "Environment",
    link: "https://medium.com/@bamboomade/letter-to-mother-earth-a5e6470a2594",
    thumbnail: "https://miro.medium.com/v2/resize:fit:654/1*xClBBhSGA_AJ-MZ36yvVew.jpeg"
  }
];

export default function PostsAndBlogs() {
  return (
    <section id="posts" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-[1600px] mx-auto mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Posts <span className="text-primary">&</span> Blogs.
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl">
              A collection of insights, experiences, and reflections across diverse design domains.
            </p>
          </motion.div>

          <motion.a
            href="#"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-widest uppercase text-xs flex items-center gap-2 hover:gap-3 transition-all"
          >
            View all insights <ExternalLink className="w-4 h-4" />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-[1600px] mx-auto">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-card border border-border/50 rounded-[2.5rem] overflow-hidden hover:shadow-2xl transition-all duration-500"
            >
              <div className="aspect-video w-full bg-muted overflow-hidden relative">
                {post.embedUrl ? (
                  <iframe
                    src={post.embedUrl}
                    className="w-full h-full border-0"
                    title={post.title}
                    allowFullScreen
                  />
                ) : post.thumbnail ? (
                  <img
                    src={post.thumbnail}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-primary/5">
                    <span className="text-primary/20 font-serif text-6xl font-bold italic">Blog</span>
                  </div>
                )}
              </div>

              <div className="p-8 md:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-2 text-muted-foreground text-xs">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors leading-tight">
                  <a href={post.link}>{post.title}</a>
                </h3>

                <p className="text-muted-foreground text-lg mb-8 line-clamp-2 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-end pt-8 border-t border-border/50">
                  <a
                    href={post.link}
                    className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-foreground group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all duration-300"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
