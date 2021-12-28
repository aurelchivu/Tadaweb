import React from 'react';
import { motion } from 'framer-motion';

const AboutScreen = () => {
  return (
    <div className='container-fluid'>
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        The Nerf Gun War
      </motion.h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.5 }}
      >
        <p>
          There once were two sisters name Emily and Ellie. On a Saturday
          morning, Ellie was looking through her old stuff from her room and she
          found an old nerf gun that had bullets that could actually kill
          someone. So Ellie decided to stay away from the gun but decided that
          she took it only if there was an emergency. Emily asked “What are you
          doing?”
        </p>
        <p>“Nothing”, said Ellie.</p>
        <p>
          Then Ellie and Emily started playing with it, but not with the
          bullets. One day they took the nerf gun and the bullets while they
          were taking a walk. They saw a robber trying to kill someone, so they
          called the police then they told the police to take the nerf gun
          because it is 5 times faster than a regular gun. The police took the
          gun, to scare them but it did not work. When the robber shot at the
          police officer then the second officer shot the bullet at the robber
          with the nerf gun and Emily and Ellie were very happy and relieved the
          officer gave it back, but for safety reason Emily said “You can keep
          it.”
        </p>
        <p>
          Emily and Ellie returned home and their mom asked “Where were you, I
          was so scared.”
        </p>
        <p>
          Emily and Ellie went to the television and Emily said “We just went
          for a walk?
        </p>
        <p>
          She turned on the news and then their parents’ saw that they both were
          heroes of the day and they also realised that they knew about the
          ancient nerf gun that can help save the world. Then their dad said,
          “There is something your mom and I have been hiding from you both.”
        </p>
        <p>
          Ellie gasped, their mom said “Your dad and I used to fight crime with
          this magic nerf gun and we didn’t want you to get hurt so we hid it.
          It was a good idea to give it to the police so they could use it to
          save the world.”
        </p>
        <p>
          They all were laughing and having dinner when the police knocked at
          the door and said we need your help right away.
        </p>
        <br />
        <figure>
          <motion.figcaption
            className='blockquote-footer'
            initial={{ translateX: 1000 }}
            animate={{ translateX: 0 }}
            transition={{ duration: 1.5 }}
          >
            Written by <cite title='Source Title'>Diya Yadav, USA.</cite>
          </motion.figcaption>
        </figure>
      </motion.div>
    </div>
  );
};

export default AboutScreen;
