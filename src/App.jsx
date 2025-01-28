import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDrag } from '@use-gesture/react';
import arrow from './assets/arrow-up.png';
import Home from './home';
import { ToastContainer } from 'react-toastify';

function App() {
  const [loading, setLoading] = useState(true);

  const bind = useDrag(
    ({ direction: [, yDir], movement: [, yMove] }) => {
      if (yDir === -1 && Math.abs(yMove) > 50) {
        setLoading(false);
      }
    },
    {
      axis: 'y',
      threshold: 10,
    }
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <ToastContainer />
      <AnimatePresence>
        {loading && (
          <motion.div
            {...bind()}
            style={{ touchAction: 'none', userSelect: 'none' }}
            key="preloader"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 1 }}
            className="fixed top-0 left-0 w-full h-full  flex flex-col items-center justify-center z-50"
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 1 }}
              className="text-center"
            >
              <h1 className="text-6xl font-bold text-[#7a1315]">Ahmed Mohamed</h1>
              <h2 className="text-4xl text-[#7a1315]">Website Developer</h2>
            </motion.div>

            <motion.div
              {...bind()}
              style={{ userSelect: 'none' }}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-6 flex flex-col items-center"
            >
              <img
                src={arrow}
                alt="Arrow pointing up"
                className="animate-bounce w-10 h-10"
                style={{ userSelect: 'none' }}
              />
              <p className="text-[#7a1315] mt-2" style={{ userSelect: 'none' }}>
                Swipe up to continue
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="p-8 text-center"
        >
          <Home/>
        </motion.div>
      )}
    </>
  );
}

export default App;