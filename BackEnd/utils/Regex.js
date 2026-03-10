// Password regex
export const passwordRegex =
/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

// Email regex
export const emailRegex =
/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Name regex
export const nameRegex =
/^[A-Za-z\s]{3,50}$/;