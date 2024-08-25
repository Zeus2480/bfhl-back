

const getOperationCode = async () => {
  return { operation_code: 1 };
};

const processBfhlData = async (data) => {
  const numbers = data.data.filter(item => !isNaN(item));
  const alphabets = data.data.filter(item => isNaN(item));
  const highestLowercaseAlphabet = alphabets
    .filter(char => char === char.toLowerCase())
    .sort((a, b) => b.localeCompare(a))[0] || [];

  const response = {
    is_success: true,
    user_id: "Priyansh Hatwal", 
    email: "priyansh.hatwal2021@vitstudent.ac.in", 
    roll_number: "21BCE5638",
    numbers,
    alphabets,
    highest_lowercase_alphabet: highestLowercaseAlphabet ? [highestLowercaseAlphabet] : [],
  };

  return response;
};

module.exports = {
  getOperationCode,
  processBfhlData,
};
