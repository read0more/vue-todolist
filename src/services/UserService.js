import User from "@/entities/User.js";

export default class userService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    /**
     *
     * @param {User}user
     * @returns {Promise<user>}
     */
    async create(user) {
        return this.userRepository.create(user);
    }
}