const mongoose = require("mongoose");
// const slugify = require("slugify");

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "A Book Should have a title"],
      unique: true,
      trim: true,
      maxlength: [100, "Title cannot be more than 100 characters"],
    },
    // slug: String,
    author: {
      type: String,
      required: [true, "A Book Should have an Author"],
      maxlength: [50, "Author name cannot be more than 50 characters"],
    },

    price: {
      type: Number,
      required: [true, "A Book Should Have a Price"],
      min: [0, "Price must be a positive value"],
    },

    category: {
      type: String,
      enum: [
        "Fiction",
        "Science",
        "Romance",
        "Fantasy",
        "Science Fiction",
        "Mystery",
        "Mystery/Thriller",
        "Self-Development",
        "Programming",
        "Thriller",
        "Economic",
        "Horror",
        "Non-Fiction",
        "Biography",
        "Autobiography",
        "Crime",
        "Children",
        "Historical Fiction",
      ],
      required: [true, "A Book Should Have a Category "],
    },

    description: {
      type: String,
      required: [true, "A Book Should Have a description"],
    },

    publishedDate: {
      type: Date,
      required: [true, "A Book Should Have a published Date"],
    },

    publisher: {
      type: String,
      required: [true, "A Book Should Have a Publisher"],
    },

    language: {
      type: String,
      default: "English",
    },

    coverImage: {
      type: String,
    },

    ratingAverage: {
      type: Number,
      default: 4.5,
      min: [0, "Rating must be above 0.0"],
      max: [5, "Rating must be below 5.0"],
    },

    ratingQuantity: {
      type: Number,
      default: 0,
    },
    downloads: {
      type: Number,
      default: 0,
    },
    recommendations: {
      type: Number,
      default: 0,
    },
    reviews: {
      type: Number,
      default: 0,
    },
    socialMediaMentions: {
      type: Number,
      default: 0,
    },
    sales: {
      type: Number,
      default: 0,
    },
    createdAt: {
      type: Date,
      default: new Date().toISOString().slice(0, 10),
      select: false,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

bookSchema.virtual("yearsSincePublication").get(function () {
  if (this.publishedDate) {
    const today = new Date();
    const year = today.getFullYear() - this.publishedDate.getFullYear();
    return Math.round(year);
  } else {
    return null;
  }
});

// DOCUMENT MIDDLEWARE
// bookSchema.pre("save", function (next) {
//   this.slug = slugify(this.title, { lower: true });
//   next();
// });

// bookSchema.post('save', function (doc, next){
//     console.log(doc)
//     next()
// })

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
