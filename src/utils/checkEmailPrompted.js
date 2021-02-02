const TIME_PROMPT_NEXT_EMAIL = 2000000000;

export const shouldPromptEmail = () => {
  try {
    const emailPromptAt = localStorage.getItem("emailPromptAt");

    if (!emailPromptAt) {
      const whenToPromptEmail = Date.now() + TIME_PROMPT_NEXT_EMAIL;
      localStorage.setItem("emailPromptAt", whenToPromptEmail);
      return true;
    }

    if (emailPromptAt < Date.now()) {
      return true;
    }
  } catch (e) {
    console.log(e);
  }
};
