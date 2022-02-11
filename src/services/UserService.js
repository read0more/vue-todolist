export default class userService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async create(user) {
        return this.userRepository.create(user);
    }
}