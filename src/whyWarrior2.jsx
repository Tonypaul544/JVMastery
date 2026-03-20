
export default function reason() {
  return (
    <motion.div
      className="flex flex-col"
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <motion.h2
        className="text-3xl! font-bold text-white mb-4 text-[#CC0000]! max-md:text-center! max-md:text-[25px]!"
        initial={{ opacity: 0, x: -50 }}
      >
        Why Join the 3T Warrior Academy?
      </motion.h2>
      <motion.p
        className="text-gray-300 text-lg mb-4 max-w-lg  max-md:text-center m-auto mb-5!"
        initial={{ opacity: 0, x: -50 }}  
      >
        The 3T Warrior Academy is more than just a financial education program; it's a transformative experience that empowers you to take control of your financial destiny. By joining our community, you'll gain access to expert guidance, proven strategies, and a supportive network of like-minded individuals who are all on the same journey towards financial freedom. Whether you're just starting out or looking to take your finances to the next level, the 3T Warrior Academy provides the tools, resources, and support you need to succeed.
      </motion.p>
    </motion.div>
  )
}