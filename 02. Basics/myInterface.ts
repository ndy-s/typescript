interface UserNew {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string,
    // startTrail: () => string,
    startTrail(): string,
    getCoupon(couponname: string, value: number): number
}

// Re-open (use it in another files)
interface UserNew {
    githubToken: string
}


// Inheritance
interface UserAdmin extends UserNew {
    role: "admin" | "ta" | "learner"
}

const saputra: UserAdmin = { dbId: 22, email: "h@h.com", userId: 2211, 
startTrail: () => {
    return "trail started"
}, 
getCoupon: (name: "lol", off: 1) => {
    return 10
},
githubToken: "github",
role: "admin" }


saputra.email = "h@hc.com"
// saputra.dbId = 33