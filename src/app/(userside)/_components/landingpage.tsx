'use client';
import './style.css';
export default function HomeComponent() {
    return (
        <div className="page-wrapper">
            <section className="hero">
                <div className="hero-top-wrap">
                    <div className="w-layout-blockcontainer container w-container">
                        <div className="hero-wrap">
                            <div className="hero-data">
                                <h1 className="hero-title">Find your next great read at our online book store</h1>
                                <div className="button-wrap"><a data-w-id="9f6b4acc-2998-4bb7-632a-642bb7583adf" href="shop.html"
                                    className="secondary-btn w-inline-block">
                                    <div>Explore Books</div><img
                                        src="https://cdn.prod.website-files.com/6491518bb88c5c4729ea8883/64b50992f5ddcd2d97e7be88_ic-arrow-white.svg"
                                        loading="eager" style={{display:"block"}} alt="Arrow" className="default-btn-arrow" /><img
                                        src="https://cdn.prod.website-files.com/6491518bb88c5c4729ea8883/64b509579ee5d800c56a7e21_ic-arrow.svg"
                                        loading="eager" style={{display:"none"}} alt="Arrow" className="hover-btn-arrow" />
                                </a></div>
                            </div>
                            <div className="hero-image-wrapper">
                                <div className="hero-book"><img
                                    src="../cdn.prod.website-files.com/6491518bb88c5c4729ea8883/64b632862000571e3613c160_book-thumb-13.jpg"
                                    loading="eager" sizes="(max-width: 479px) 92vw, (max-width: 767px) 45vw, 22vw"
                                    srcSet="https://assets-global.website-files.com/6491518bb88c5c4729ea8883/64b632862000571e3613c160_book-thumb-13-p-500.jpg 500w, https://assets-global.website-files.com/6491518bb88c5c4729ea8883/64b632862000571e3613c160_book-thumb-13.jpg 618w"
                                    alt="Book" className="hero-book-img" /></div>
                                <div className="hero-book-two"><img
                                    src="../cdn.prod.website-files.com/6491518bb88c5c4729ea8883/64b63273ee9e6ec6db54d961_book-thumb-03.jpg"
                                    loading="lazy" sizes="(max-width: 767px) 100vw, 22vw"
                                    srcSet="https://assets-global.website-files.com/6491518bb88c5c4729ea8883/64b63273ee9e6ec6db54d961_book-thumb-03-p-500.jpg 500w, https://assets-global.website-files.com/6491518bb88c5c4729ea8883/64b63273ee9e6ec6db54d961_book-thumb-03.jpg 618w"
                                    alt="Book" className="hero-book-img" /></div>
                            </div>
                            <div className="triangle"></div>
                        </div>
                    </div>
                </div>
                <div className="hero-bottom-wrap">
                    <div className="w-layout-blockcontainer container w-container">
                        <div className="hero-bottom">
                            <div className="hero-category">
                                <div className="category-btn">
                                    <div className="star-icon"><img
                                        src="https://cdn.prod.website-files.com/6491518bb88c5c4729ea8883/64b636aa146d77fd2587a5f7_ic-star.svg"
                                        loading="lazy" alt="Star" /></div><a href="category/biography.html"
                                            className="category-tag w-inline-block">
                                        <div>Biography</div>
                                    </a>
                                </div>
                                <div className="category-btn"><a href="category/novel.html" className="category-tag w-inline-block">
                                    <div>Novel</div>
                                </a>
                                    <div className="star-icon"><img
                                        src="https://cdn.prod.website-files.com/6491518bb88c5c4729ea8883/64b636aa146d77fd2587a5f7_ic-star.svg"
                                        loading="lazy" alt="Star" /></div><a href="category/self-help.html"
                                            className="category-tag w-inline-block">
                                        <div>Self Help</div>
                                    </a>
                                </div>
                            </div>
                            <div className="hero-review">
                                <div className="review-top">
                                    <div className="button-wrap style-btn"><a href="customer-review.html"
                                        className="primary-btn review w-inline-block">
                                        <div>Reviews</div>
                                    </a>
                                        <div className="review-img-wrap">
                                            <div className="hero-review-img"><img
                                                src="../cdn.prod.website-files.com/6491518bb88c5c4729ea8883/64b63d3445c2ac6152c91839_review-01.jpg"
                                                loading="lazy" alt="Review Image" /></div>
                                            <div className="hero-review-img"><img
                                                src="../cdn.prod.website-files.com/6491518bb88c5c4729ea8883/64b63d34ad9df4dad18efbd2_review-03.jpg"
                                                loading="lazy" alt="Review Image" /></div>
                                            <div className="hero-review-img"><img
                                                src="../cdn.prod.website-files.com/6491518bb88c5c4729ea8883/64b63d346bbdd08b76f948c4_review-02.jpg"
                                                loading="lazy" alt="Review Image" /></div>
                                        </div>
                                    </div>
                                </div>
                                <p className="hr-text">Find captivating stories, knowledge, and adventures. From classNameics to bestsellers,
                                    there&#x27;s something for everyone.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="about">
                <div className="w-layout-blockcontainer container w-container">
                    <div className="about-wrap">
                        <div className="about-head">
                            <div className="about-img-small"><img
                                src="../cdn.prod.website-files.com/6491518bb88c5c4729ea8883/64b65c072152ab63f7801aad_about-small.jpg"
                                loading="lazy" sizes="(max-width: 479px) 92vw, (max-width: 719px) 94vw, (max-width: 767px) 676px, 24vw"
                                srcSet="https://assets-global.website-files.com/6491518bb88c5c4729ea8883/64b65c072152ab63f7801aad_about-small-p-500.jpg 500w, https://assets-global.website-files.com/6491518bb88c5c4729ea8883/64b65c072152ab63f7801aad_about-small.jpg 676w"
                                alt="About Image" /></div>
                            <div className="about-heading">
                                <h2 className="about-title">Introducing Our Bookstore and Community</h2>
                                <div className="body-small">Discover our bookstore and community, where stories unfold and connections
                                    flourish.</div>
                            </div>
                        </div>
                        <div className="about-data-wrap">
                            <div className="about-image-wrap">
                                <div className="about-img-big"><img
                                    src="../cdn.prod.website-files.com/6491518bb88c5c4729ea8883/64b65c076e64fe4278c64362_about-big.jpg"
                                    loading="lazy" sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 47vw, 48vw"
                                    srcSet="https://assets-global.website-files.com/6491518bb88c5c4729ea8883/64b65c076e64fe4278c64362_about-big-p-500.jpg 500w, https://assets-global.website-files.com/6491518bb88c5c4729ea8883/64b65c076e64fe4278c64362_about-big-p-800.jpg 800w, https://assets-global.website-files.com/6491518bb88c5c4729ea8883/64b65c076e64fe4278c64362_about-big.jpg 1202w"
                                    alt="About Image" /></div>
                            </div>
                            <div className="about-info">
                                <p className="about-text">Welcome to Book Store: Empowering Minds Through Reading! We believe in the
                                    transformative power of books and their ability to shape and inspire individuals. Our mission is to
                                    create a vibrant and inclusive community that celebrates the joy of reading and encourages personal
                                    growth.</p>
                                <div className="button-wrap"><a data-w-id="790d5147-5340-d65e-fa0e-a4082775f6ae" href="about-us.html"
                                    className="primary-btn w-inline-block">
                                    <div>About us</div><img
                                        src="https://cdn.prod.website-files.com/6491518bb88c5c4729ea8883/64b509579ee5d800c56a7e21_ic-arrow.svg"
                                        loading="eager" style={{display:"block"}} alt="Arrow" className="default-btn-arrow" /><img
                                        src="https://cdn.prod.website-files.com/6491518bb88c5c4729ea8883/64b50992f5ddcd2d97e7be88_ic-arrow-white.svg"
                                        loading="eager" style={{display:"none"}} alt="Arrow" className="hover-btn-arrow" />
                                </a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="categories">
                <div className="w-layout-blockcontainer container w-container">
                    <div className="section-title">
                        <h2 className="title">Explore Categories</h2>
                    </div>
                    <div className="categories-wrap"><a id="w-node-a01b7f6a-cc5b-ecec-c0db-f1653c265fea-29ea8887"
                        data-w-id="a01b7f6a-cc5b-ecec-c0db-f1653c265fea" href="category/biography.html"
                        className="category w-inline-block">
                        <div className="category-img-wrap"><img
                            src="../cdn.prod.website-files.com/6491518bb88c5c4729ea8883/64b667ebd3a2a264e26fd82c_biography.jpg"
                            loading="lazy"
                            // style={{-webkitTransform:"translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",-mozTransform:"translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",-msTransform:"translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",transform:"translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)"}}
                            alt="Category Image" className="category-image" /></div>
                        <div className="category-data">
                            <h4 className="category-title">Biography</h4>
                            <div className="button-wrap">
                                <div className="shop-btn">
                                    <div>Shop Now</div>
                                </div>
                            </div>
                        </div>
                    </a><a id="w-node-_1d98b65c-a9df-5e37-bfac-54cc024bd0b7-29ea8887"
                        data-w-id="1d98b65c-a9df-5e37-bfac-54cc024bd0b7" href="category/novel.html" className="category w-inline-block">
                            <div className="category-img-wrap"><img
                                src="../cdn.prod.website-files.com/6491518bb88c5c4729ea8883/64b667ebcbb311f07e232944_novel.jpg"
                                loading="lazy"
                                // style="-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)"
                                alt="Category Image" className="category-image" /></div>
                            <div className="category-data self-help">
                                <h4 className="category-title">Novel</h4>
                                <div className="button-wrap">
                                    <div className="shop-btn">
                                        <div>Shop Now</div>
                                    </div>
                                </div>
                            </div>
                        </a><a id="w-node-ef4db956-8ece-f4a1-6e94-3ea0c4c5b85b-29ea8887"
                            data-w-id="ef4db956-8ece-f4a1-6e94-3ea0c4c5b85b" href="category/self-help.html"
                            className="category w-inline-block">
                            <div className="category-img-wrap"><img
                                src="../cdn.prod.website-files.com/6491518bb88c5c4729ea8883/64b667ebb53f528e8fb001ac_self-help.jpg"
                                loading="lazy"
                                // style="-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)"
                                alt="Category Image" className="category-image" /></div>
                            <div className="category-data novel">
                                <h4 className="category-title">Self Help</h4>
                                <div className="button-wrap">
                                    <div className="shop-btn">
                                        <div>Shop Now</div>
                                    </div>
                                </div>
                            </div>
                        </a></div>
                </div>
            </section>
            <section className="popular-books">
                <div className="w-layout-blockcontainer container w-container">
                    <div className="section-title">
                        <div className="sub-heading">Trending</div>
                        <h2 className="title">Popular Books</h2>
                    </div>
                    <div className="w-dyn-list">
                        <div role="list" className="book-list w-dyn-items">
                            <div role="listitem" className="book-item w-dyn-item"><a data-w-id="12acf1b3-b768-a2a0-b81d-15065b54efd4"
                                href="product/the-psychology-of-money.html" className="book-link w-inline-block">
                                <div
                                    // style="-webkit-transform:translate3d(null, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(null, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(null, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(null, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)"
                                    className="book-image"><img loading="lazy"
                                        data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr%22%2C%22to%22%3A%22src%22%7D%5D"
                                        src="../cdn.prod.website-files.com/64b787e06a1ea8dedc36b707/64ba5abe5edf60c6b4ec5e3e_book-main-13.jpg"
                                        alt="Book" sizes="(max-width: 479px) 82vw, (max-width: 767px) 46vw, (max-width: 991px) 47vw, 23vw"
                                        srcSet="https://cdn.prod.website-files.com/64b787e06a1ea8dedc36b707/64ba5abe5edf60c6b4ec5e3e_book-main-13-p-500.jpg 500w, https://cdn.prod.website-files.com/64b787e06a1ea8dedc36b707/64ba5abe5edf60c6b4ec5e3e_book-main-13-p-800.jpg 800w, https://cdn.prod.website-files.com/64b787e06a1ea8dedc36b707/64ba5abe5edf60c6b4ec5e3e_book-main-13.jpg 1040w"
                                        className="book-img" /></div>
                                <div className="book-data">
                                    <h4 className="book-name">The Psychology of Money</h4>
                                    <div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D"
                                        className="price">$ 6.40 USD</div>
                                </div>
                            </a></div>
                            <div role="listitem" className="book-item w-dyn-item"><a data-w-id="12acf1b3-b768-a2a0-b81d-15065b54efd4"
                                href="product/educated.html" className="book-link w-inline-block">
                                <div
                                    // style="-webkit-transform:translate3d(null, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(null, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(null, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(null, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)"
                                    className="book-image"><img loading="lazy"
                                        data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr%22%2C%22to%22%3A%22src%22%7D%5D"
                                        src="../cdn.prod.website-files.com/64b787e06a1ea8dedc36b707/64be0825ec69631e3132ef29_book-main-24.jpg"
                                        alt="Book" sizes="(max-width: 479px) 82vw, (max-width: 767px) 46vw, (max-width: 991px) 47vw, 23vw"
                                        srcSet="https://cdn.prod.website-files.com/64b787e06a1ea8dedc36b707/64be0825ec69631e3132ef29_book-main-24-p-500.jpg 500w, https://cdn.prod.website-files.com/64b787e06a1ea8dedc36b707/64be0825ec69631e3132ef29_book-main-24-p-800.jpg 800w, https://cdn.prod.website-files.com/64b787e06a1ea8dedc36b707/64be0825ec69631e3132ef29_book-main-24.jpg 1040w"
                                        className="book-img" /></div>
                                <div className="book-data">
                                    <h4 className="book-name">Educated</h4>
                                    <div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D"
                                        className="price">$ 12.96 USD</div>
                                </div>
                            </a></div>
                            <div role="listitem" className="book-item w-dyn-item"><a data-w-id="12acf1b3-b768-a2a0-b81d-15065b54efd4"
                                href="product/where-the-crawdads-sing.html" className="book-link w-inline-block">
                                <div
                                    // style="-webkit-transform:translate3d(null, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(null, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(null, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(null, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)"
                                    className="book-image"><img loading="lazy"
                                        data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr%22%2C%22to%22%3A%22src%22%7D%5D"
                                        src="../cdn.prod.website-files.com/64b787e06a1ea8dedc36b707/64be0bb896697a59a996a3bb_book-main-08.jpg"
                                        alt="Book" sizes="(max-width: 479px) 82vw, (max-width: 767px) 46vw, (max-width: 991px) 47vw, 23vw"
                                        srcSet="https://cdn.prod.website-files.com/64b787e06a1ea8dedc36b707/64be0bb896697a59a996a3bb_book-main-08-p-500.jpg 500w, https://cdn.prod.website-files.com/64b787e06a1ea8dedc36b707/64be0bb896697a59a996a3bb_book-main-08-p-800.jpg 800w, https://cdn.prod.website-files.com/64b787e06a1ea8dedc36b707/64be0bb896697a59a996a3bb_book-main-08.jpg 1040w"
                                        className="book-img" /></div>
                                <div className="book-data">
                                    <h4 className="book-name">Where The Crawdads Sing</h4>
                                    <div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D"
                                        className="price">$ 11.12 USD</div>
                                </div>
                            </a></div>
                            <div role="listitem" className="book-item w-dyn-item"><a data-w-id="12acf1b3-b768-a2a0-b81d-15065b54efd4"
                                href="product/to-kill-a-mockingbird.html" className="book-link w-inline-block">
                                <div
                                    // style="-webkit-transform:translate3d(null, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(null, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(null, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(null, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)"
                                    className="book-image"><img loading="lazy"
                                        data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr%22%2C%22to%22%3A%22src%22%7D%5D"
                                        src="../cdn.prod.website-files.com/64b787e06a1ea8dedc36b707/64ba6870fa4742b8e114fd72_book-main-09.jpg"
                                        alt="Book" sizes="(max-width: 479px) 82vw, (max-width: 767px) 46vw, (max-width: 991px) 47vw, 23vw"
                                        srcSet="https://cdn.prod.website-files.com/64b787e06a1ea8dedc36b707/64ba6870fa4742b8e114fd72_book-main-09-p-500.jpg 500w, https://cdn.prod.website-files.com/64b787e06a1ea8dedc36b707/64ba6870fa4742b8e114fd72_book-main-09-p-800.jpg 800w, https://cdn.prod.website-files.com/64b787e06a1ea8dedc36b707/64ba6870fa4742b8e114fd72_book-main-09.jpg 1040w"
                                        className="book-img" /></div>
                                <div className="book-data">
                                    <h4 className="book-name">To Kill a Mockingbird</h4>
                                    <div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D"
                                        className="price">$ 4.78 USD</div>
                                </div>
                            </a></div>
                        </div>
                    </div>
                    <div className="right-btn-wrap"><a data-w-id="4a85b2e1-73d1-4261-fe9c-8735500f416f" href="shop.html"
                        className="primary-btn w-inline-block">
                        <div>View All</div><img
                            src="https://cdn.prod.website-files.com/6491518bb88c5c4729ea8883/64b509579ee5d800c56a7e21_ic-arrow.svg"
                            loading="eager" style={{display:"block" }}alt="Arrow" className="default-btn-arrow" /><img
                            src="https://cdn.prod.website-files.com/6491518bb88c5c4729ea8883/64b50992f5ddcd2d97e7be88_ic-arrow-white.svg"
                            loading="eager" style={{display:"none" }} alt="Arrow" className="hover-btn-arrow" />
                    </a></div>
                </div>
            </section>
            <section className="features">
                <div className="w-layout-blockcontainer container w-container">
                    <div className="features-wrap">
                        <div className="feature">
                            <div className="feature-text">
                                <h3 className="feature-title">Free Shipping for Book Lovers</h3>
                                <div className="feature-info">Explore &amp; Shop Books Now</div>
                            </div>
                            <div className="feature-image"><img
                                src="https://cdn.prod.website-files.com/6491518bb88c5c4729ea8883/64b68f1aad558e5a92f04fa8_feature-03.svg"
                                loading="lazy" alt="Feature Image" className="feature-img" /></div>
                        </div>
                        <div className="feature pink">
                            <div className="feature-text">
                                <h3 className="feature-title">Return with Confidence</h3>
                                <div className="feature-info">Within 20 Days Return</div>
                            </div>
                            <div className="feature-image"><img
                                src="https://cdn.prod.website-files.com/6491518bb88c5c4729ea8883/64b68f1aab9f91725bcd44f5_feature-02.svg"
                                loading="lazy" alt="Feature Image" className="feature-img" /></div>
                        </div>
                        <div className="feature yellow">
                            <div className="feature-text">
                                <h3 className="feature-title">Efficient Book Delivery</h3>
                                <div className="feature-info">Fast &amp; Efficient Service</div>
                            </div>
                            <div className="feature-image"><img
                                src="https://cdn.prod.website-files.com/6491518bb88c5c4729ea8883/64b68f1a80e13bcde5bbc55c_feature-01.svg"
                                loading="lazy" alt="Feature Image" className="feature-img" /></div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="new-arrival-book">
                <div className="w-layout-blockcontainer container w-container">
                    <div className="section-title">
                        <div className="sub-heading">Latest Collection</div>
                        <h2 className="title">New Arrival Books</h2>
                    </div>
                    <div className="w-dyn-list">
                        <div role="list" className="book-list w-dyn-items">
                            <div role="listitem" className="book-item w-dyn-item"><a data-w-id="fcf48d84-4fab-1909-e19d-531f6fe956d7"
                                href="product/the-alchemist.html" className="book-link w-inline-block">
                                <div
                                    // style="-webkit-transform:translate3d(null, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(null, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(null, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(null, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)"
                                    className="book-image"><img loading="lazy"
                                        data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr%22%2C%22to%22%3A%22src%22%7D%5D"
                                        src="../cdn.prod.website-files.com/64b787e06a1ea8dedc36b707/64ba6715ea0a30cccbac89aa_book-main-03.jpg"
                                        alt="Book" sizes="(max-width: 479px) 82vw, (max-width: 767px) 46vw, (max-width: 991px) 47vw, 23vw"
                                        srcSet="https://cdn.prod.website-files.com/64b787e06a1ea8dedc36b707/64ba6715ea0a30cccbac89aa_book-main-03-p-500.jpg 500w, https://cdn.prod.website-files.com/64b787e06a1ea8dedc36b707/64ba6715ea0a30cccbac89aa_book-main-03-p-800.jpg 800w, https://cdn.prod.website-files.com/64b787e06a1ea8dedc36b707/64ba6715ea0a30cccbac89aa_book-main-03.jpg 1040w"
                                        className="book-img" /></div>
                                <div className="book-data">
                                    <h4 className="book-name">The Alchemist</h4>
                                    <div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D"
                                        className="price">$ 11.00 USD</div>
                                </div>
                            </a></div>
                            <div role="listitem" className="book-item w-dyn-item"><a data-w-id="fcf48d84-4fab-1909-e19d-531f6fe956d7"
                                href="product/over-my-dead-body.html" className="book-link w-inline-block">
                                <div
                                    // style="-webkit-transform:translate3d(null, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(null, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(null, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(null, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)"
                                    className="book-image"><img loading="lazy"
                                        data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr%22%2C%22to%22%3A%22src%22%7D%5D"
                                        src="../cdn.prod.website-files.com/64b787e06a1ea8dedc36b707/64ba67f2e3fee0b8d403319d_book-main-06.jpg"
                                        alt="Book" sizes="(max-width: 479px) 82vw, (max-width: 767px) 46vw, (max-width: 991px) 47vw, 23vw"
                                        srcSet="https://cdn.prod.website-files.com/64b787e06a1ea8dedc36b707/64ba67f2e3fee0b8d403319d_book-main-06-p-500.jpg 500w, https://cdn.prod.website-files.com/64b787e06a1ea8dedc36b707/64ba67f2e3fee0b8d403319d_book-main-06-p-800.jpg 800w, https://cdn.prod.website-files.com/64b787e06a1ea8dedc36b707/64ba67f2e3fee0b8d403319d_book-main-06.jpg 1040w"
                                        className="book-img" /></div>
                                <div className="book-data">
                                    <h4 className="book-name">Over My Dead Body</h4>
                                    <div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D"
                                        className="price">$ 14.52 USD</div>
                                </div>
                            </a></div>
                            <div role="listitem" className="book-item w-dyn-item"><a data-w-id="fcf48d84-4fab-1909-e19d-531f6fe956d7"
                                href="product/ikigai.html" className="book-link w-inline-block">
                                <div
                                    // style="-webkit-transform:translate3d(null, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(null, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(null, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(null, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)"
                                    className="book-image"><img loading="lazy"
                                        data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr%22%2C%22to%22%3A%22src%22%7D%5D"
                                        src="../cdn.prod.website-files.com/64b787e06a1ea8dedc36b707/64ba60320ecd3dee97d14370_book-main-05.jpg"
                                        alt="Book" sizes="(max-width: 479px) 82vw, (max-width: 767px) 46vw, (max-width: 991px) 47vw, 23vw"
                                        srcSet="https://cdn.prod.website-files.com/64b787e06a1ea8dedc36b707/64ba60320ecd3dee97d14370_book-main-05-p-500.jpg 500w, https://cdn.prod.website-files.com/64b787e06a1ea8dedc36b707/64ba60320ecd3dee97d14370_book-main-05-p-800.jpg 800w, https://cdn.prod.website-files.com/64b787e06a1ea8dedc36b707/64ba60320ecd3dee97d14370_book-main-05.jpg 1040w"
                                        className="book-img" /></div>
                                <div className="book-data">
                                    <h4 className="book-name">Ikigai</h4>
                                    <div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D"
                                        className="price">$ 11.50 USD</div>
                                </div>
                            </a></div>
                            <div role="listitem" className="book-item w-dyn-item"><a data-w-id="fcf48d84-4fab-1909-e19d-531f6fe956d7"
                                href="product/think-and-grow-rich.html" className="book-link w-inline-block">
                                <div
                                    // style="-webkit-transform:translate3d(null, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(null, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(null, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(null, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)"
                                    className="book-image"><img loading="lazy"
                                        data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr%22%2C%22to%22%3A%22src%22%7D%5D"
                                        src="../cdn.prod.website-files.com/64b787e06a1ea8dedc36b707/64ba5ee5443f47cb055dec2f_book-main-21.jpg"
                                        alt="Book" sizes="(max-width: 479px) 82vw, (max-width: 767px) 46vw, (max-width: 991px) 47vw, 23vw"
                                        srcSet="https://cdn.prod.website-files.com/64b787e06a1ea8dedc36b707/64ba5ee5443f47cb055dec2f_book-main-21-p-500.jpg 500w, https://cdn.prod.website-files.com/64b787e06a1ea8dedc36b707/64ba5ee5443f47cb055dec2f_book-main-21-p-800.jpg 800w, https://cdn.prod.website-files.com/64b787e06a1ea8dedc36b707/64ba5ee5443f47cb055dec2f_book-main-21.jpg 1040w"
                                        className="book-img" /></div>
                                <div className="book-data">
                                    <h4 className="book-name">Think And Grow Rich</h4>
                                    <div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D"
                                        className="price">$ 12.78 USD</div>
                                </div>
                            </a></div>
                            <div role="listitem" className="book-item w-dyn-item"><a data-w-id="fcf48d84-4fab-1909-e19d-531f6fe956d7"
                                href="product/12-rules-for-life.html" className="book-link w-inline-block">
                                <div
                                    // style="-webkit-transform:translate3d(null, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(null, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(null, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(null, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)"
                                    className="book-image"><img loading="lazy"
                                        data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr%22%2C%22to%22%3A%22src%22%7D%5D"
                                        src="../cdn.prod.website-files.com/64b787e06a1ea8dedc36b707/64ba5ad74a0de66a338dc3d2_book-main-01.jpg"
                                        alt="Book" sizes="(max-width: 479px) 82vw, (max-width: 767px) 46vw, (max-width: 991px) 47vw, 23vw"
                                        srcSet="https://cdn.prod.website-files.com/64b787e06a1ea8dedc36b707/64ba5ad74a0de66a338dc3d2_book-main-01-p-500.jpg 500w, https://cdn.prod.website-files.com/64b787e06a1ea8dedc36b707/64ba5ad74a0de66a338dc3d2_book-main-01-p-800.jpg 800w, https://cdn.prod.website-files.com/64b787e06a1ea8dedc36b707/64ba5ad74a0de66a338dc3d2_book-main-01.jpg 1040w"
                                        className="book-img" /></div>
                                <div className="book-data">
                                    <h4 className="book-name">12 Rules for Life</h4>
                                    <div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D"
                                        className="price">$ 9.74 USD</div>
                                </div>
                            </a></div>
                            <div role="listitem" className="book-item w-dyn-item"><a data-w-id="fcf48d84-4fab-1909-e19d-531f6fe956d7"
                                href="product/the-richest-man-in-babylon.html" className="book-link w-inline-block">
                                <div
                                    // style="-webkit-transform:translate3d(null, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(null, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(null, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(null, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)"
                                    className="book-image"><img loading="lazy"
                                        data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr%22%2C%22to%22%3A%22src%22%7D%5D"
                                        src="../cdn.prod.website-files.com/64b787e06a1ea8dedc36b707/64be07aba9b6312524b00127_book-main-16.jpg"
                                        alt="Book" sizes="(max-width: 479px) 82vw, (max-width: 767px) 46vw, (max-width: 991px) 47vw, 23vw"
                                        srcSet="https://cdn.prod.website-files.com/64b787e06a1ea8dedc36b707/64be07aba9b6312524b00127_book-main-16-p-500.jpg 500w, https://cdn.prod.website-files.com/64b787e06a1ea8dedc36b707/64be07aba9b6312524b00127_book-main-16-p-800.jpg 800w, https://cdn.prod.website-files.com/64b787e06a1ea8dedc36b707/64be07aba9b6312524b00127_book-main-16.jpg 1040w"
                                        className="book-img" /></div>
                                <div className="book-data">
                                    <h4 className="book-name">The Richest Man In Babylon</h4>
                                    <div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D"
                                        className="price">$ 10.49 USD</div>
                                </div>
                            </a></div>
                            <div role="listitem" className="book-item w-dyn-item"><a data-w-id="fcf48d84-4fab-1909-e19d-531f6fe956d7"
                                href="product/the-almanack-of-naval-ravikant.html" className="book-link w-inline-block">
                                <div
                                    // style="-webkit-transform:translate3d(null, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(null, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(null, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(null, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)"
                                    className="book-image"><img loading="lazy"
                                        data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr%22%2C%22to%22%3A%22src%22%7D%5D"
                                        src="../cdn.prod.website-files.com/64b787e06a1ea8dedc36b707/64ba63853e598ba215b87048_book-main-19.jpg"
                                        alt="Book" sizes="(max-width: 479px) 82vw, (max-width: 767px) 46vw, (max-width: 991px) 47vw, 23vw"
                                        srcSet="https://cdn.prod.website-files.com/64b787e06a1ea8dedc36b707/64ba63853e598ba215b87048_book-main-19-p-500.jpg 500w, https://cdn.prod.website-files.com/64b787e06a1ea8dedc36b707/64ba63853e598ba215b87048_book-main-19-p-800.jpg 800w, https://cdn.prod.website-files.com/64b787e06a1ea8dedc36b707/64ba63853e598ba215b87048_book-main-19.jpg 1040w"
                                        className="book-img" /></div>
                                <div className="book-data">
                                    <h4 className="book-name">The Almanack Of Naval Ravikant</h4>
                                    <div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D"
                                        className="price">$ 10.36 USD</div>
                                </div>
                            </a></div>
                            <div role="listitem" className="book-item w-dyn-item"><a data-w-id="fcf48d84-4fab-1909-e19d-531f6fe956d7"
                                href="product/the-psychology-of-money.html" className="book-link w-inline-block">
                                <div
                                    // style="-webkit-transform:translate3d(null, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(null, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(null, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(null, 0px, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)"
                                    className="book-image"><img loading="lazy"
                                        data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr%22%2C%22to%22%3A%22src%22%7D%5D"
                                        src="../cdn.prod.website-files.com/64b787e06a1ea8dedc36b707/64ba5abe5edf60c6b4ec5e3e_book-main-13.jpg"
                                        alt="Book" sizes="(max-width: 479px) 82vw, (max-width: 767px) 46vw, (max-width: 991px) 47vw, 23vw"
                                        srcSet="https://cdn.prod.website-files.com/64b787e06a1ea8dedc36b707/64ba5abe5edf60c6b4ec5e3e_book-main-13-p-500.jpg 500w, https://cdn.prod.website-files.com/64b787e06a1ea8dedc36b707/64ba5abe5edf60c6b4ec5e3e_book-main-13-p-800.jpg 800w, https://cdn.prod.website-files.com/64b787e06a1ea8dedc36b707/64ba5abe5edf60c6b4ec5e3e_book-main-13.jpg 1040w"
                                        className="book-img" /></div>
                                <div className="book-data">
                                    <h4 className="book-name">The Psychology of Money</h4>
                                    <div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D"
                                        className="price">$ 6.40 USD</div>
                                </div>
                            </a></div>
                        </div>
                    </div>
                    <div className="right-btn-wrap"><a data-w-id="6ef396e7-a567-c77d-bbeb-547e45ddb30a" href="shop.html"
                        className="primary-btn w-inline-block">
                        <div>View All Books</div><img
                            src="https://cdn.prod.website-files.com/6491518bb88c5c4729ea8883/64b509579ee5d800c56a7e21_ic-arrow.svg"
                            loading="eager" style={{display:"block"}} alt="Arrow" className="default-btn-arrow" /><img
                            src="https://cdn.prod.website-files.com/6491518bb88c5c4729ea8883/64b50992f5ddcd2d97e7be88_ic-arrow-white.svg"
                            loading="eager"style={{display:"none" }}alt="Arrow" className="hover-btn-arrow" />
                    </a></div>
                </div>
            </section>
            <section className="featured-book">
                <div className="w-layout-blockcontainer container w-container">
                    <div className="section-title">
                        <h2 className="title">Featured Book of the Week</h2>
                    </div>
                    <div className="fb-book-wrap">
                        <div className="featured-book-wrap">
                            <div className="collection-list-wrapper w-dyn-list">
                                <div role="list" className="fb-book-list w-dyn-items">
                                    <div role="listitem" className="fb-book-list w-dyn-item"><a
                                        href="product/the-almanack-of-naval-ravikant.html" className="fb-big-link w-inline-block">
                                        <div className="fb-big-book"><img loading="lazy"
                                            data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr%22%2C%22to%22%3A%22src%22%7D%5D"
                                            src="../cdn.prod.website-files.com/64b787e06a1ea8dedc36b707/64ba63853e598ba215b87048_book-main-19.jpg"
                                            alt="Book"
                                            sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 43vw, 27vw"
                                            srcSet="https://cdn.prod.website-files.com/64b787e06a1ea8dedc36b707/64ba63853e598ba215b87048_book-main-19-p-500.jpg 500w, https://cdn.prod.website-files.com/64b787e06a1ea8dedc36b707/64ba63853e598ba215b87048_book-main-19-p-800.jpg 800w, https://cdn.prod.website-files.com/64b787e06a1ea8dedc36b707/64ba63853e598ba215b87048_book-main-19.jpg 1040w"
                                            className="fb-book-img" /></div>
                                        <div className="fb-book-details">
                                            <div className="fb-book-data">
                                                <h3 className="fb-book-title">The Almanack Of Naval Ravikant</h3>
                                                <p>Getting rich is not just about luck; happiness is not just a trait we are born with.These
                                                    aspirations may seem out of reach, but building wealth and being happy are skills we can
                                                    learn.</p>
                                                <p className="single-text">So what are these skills, and how do we learn them? What are the
                                                    principles that should guide our efforts?</p>
                                            </div>
                                            <div className="book-info-wrap">
                                                <div className="book-info">
                                                    <h6 className="fb-book-author">Eric Jorgenson</h6>
                                                    <div
                                                        data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D">
                                                        $ 10.36 USD</div>
                                                </div>
                                                <div className="shop-btn-wrap">
                                                    <div data-w-id="89179d60-fde0-c5f1-b048-9d3330303a4b" className="primary-btn fb-button">
                                                        <div>Shop Now</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a></div>
                                </div>
                            </div>
                        </div>
                        <div className="fb-small-wrap">
                            <div className="w-dyn-list">
                                <div role="list" className="fb-small-list w-dyn-items">
                                    <div role="listitem" className="fb-small-item w-dyn-item"><a href="product/the-psychology-of-money.html"
                                        className="fb-small-link w-inline-block">
                                        <div className="fb-small-image"><img alt="" loading="lazy"
                                            data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr%22%2C%22to%22%3A%22src%22%7D%5D"
                                            src="../cdn.prod.website-files.com/64b787e06a1ea8dedc36b707/64ba5abe5edf60c6b4ec5e3e_book-main-13.jpg"
                                            sizes="(max-width: 479px) 64vw, (max-width: 767px) 46vw, (max-width: 991px) 19vw, 12vw"
                                            srcSet="https://cdn.prod.website-files.com/64b787e06a1ea8dedc36b707/64ba5abe5edf60c6b4ec5e3e_book-main-13-p-500.jpg 500w, https://cdn.prod.website-files.com/64b787e06a1ea8dedc36b707/64ba5abe5edf60c6b4ec5e3e_book-main-13-p-800.jpg 800w, https://cdn.prod.website-files.com/64b787e06a1ea8dedc36b707/64ba5abe5edf60c6b4ec5e3e_book-main-13.jpg 1040w"
                                            className="fb-small-img" /></div>
                                        <div className="sb-info">
                                            <h3 className="fb-small-title">The Psychology of Money</h3>
                                            <div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D">
                                                $ 6.40 USD</div>
                                        </div>
                                    </a>
                                        <div className="divider"></div>
                                    </div>
                                    <div role="listitem" className="fb-small-item w-dyn-item"><a href="product/12-rules-for-life.html"
                                        className="fb-small-link w-inline-block">
                                        <div className="fb-small-image"><img alt="" loading="lazy"
                                            data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_main_image_4dr%22%2C%22to%22%3A%22src%22%7D%5D"
                                            src="../cdn.prod.website-files.com/64b787e06a1ea8dedc36b707/64ba5ad74a0de66a338dc3d2_book-main-01.jpg"
                                            sizes="(max-width: 479px) 64vw, (max-width: 767px) 46vw, (max-width: 991px) 19vw, 12vw"
                                            srcSet="https://cdn.prod.website-files.com/64b787e06a1ea8dedc36b707/64ba5ad74a0de66a338dc3d2_book-main-01-p-500.jpg 500w, https://cdn.prod.website-files.com/64b787e06a1ea8dedc36b707/64ba5ad74a0de66a338dc3d2_book-main-01-p-800.jpg 800w, https://cdn.prod.website-files.com/64b787e06a1ea8dedc36b707/64ba5ad74a0de66a338dc3d2_book-main-01.jpg 1040w"
                                            className="fb-small-img" /></div>
                                        <div className="sb-info">
                                            <h3 className="fb-small-title">12 Rules for Life</h3>
                                            <div data-wf-sku-bindings="%5B%7B%22from%22%3A%22f_price_%22%2C%22to%22%3A%22innerHTML%22%7D%5D">
                                                $ 9.74 USD</div>
                                        </div>
                                    </a>
                                        <div className="divider"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="blog">
                <div className="w-layout-blockcontainer container w-container">
                    <div className="section-title">
                        <div className="sub-heading">Blogs</div>
                        <h2 className="title">Latest News &amp; Resources</h2>
                    </div>
                    <div className="blog-wrap">
                        <div className="blog-collection w-dyn-list">
                            <div role="list" className="blog-list w-dyn-items">
                                <div role="listitem" className="featured-blog w-dyn-item"><a data-w-id="19d1d961-cfd3-0f7f-084d-526e5a33f631"
                                    href="blog/a-journey-into-the-enchanting-depths-of-books.html"
                                    className="featured-blog-link w-inline-block">
                                    <div className="fb-blog-image"><img
                                        src="../cdn.prod.website-files.com/64b787e06a1ea8dedc36b707/64b78f800dc24320783bd41c_blog-thumb-07.jpg"
                                        loading="lazy"
                                        // style="-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)"
                                        alt="Blog Thumb"
                                        sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 96vw, 47vw"
                                        srcSet="https://cdn.prod.website-files.com/64b787e06a1ea8dedc36b707/64b78f800dc24320783bd41c_blog-thumb-07-p-500.jpg 500w, https://cdn.prod.website-files.com/64b787e06a1ea8dedc36b707/64b78f800dc24320783bd41c_blog-thumb-07-p-800.jpg 800w, https://cdn.prod.website-files.com/64b787e06a1ea8dedc36b707/64b78f800dc24320783bd41c_blog-thumb-07-p-1080.jpg 1080w, https://cdn.prod.website-files.com/64b787e06a1ea8dedc36b707/64b78f800dc24320783bd41c_blog-thumb-07.jpg 1176w"
                                        className="featured-blog-img" /></div>
                                    <div className="fb-blog-data">
                                        <div className="blog-date">July 25, 2023</div>
                                        <h3 className="blog-title">A Journey into the Enchanting Depths of Books</h3>
                                        <p className="blog-info">Our collection of books is a valuable resource for nurturing your artistic
                                            growth and expanding your creative horizons.</p>
                                    </div>
                                </a></div>
                            </div>
                        </div>
                        <div className="blog-collection w-dyn-list">
                            <div role="list" className="blog-list w-dyn-items">
                                <div role="listitem" className="small-blog w-dyn-item"><a data-w-id="d89ac8d8-4ca0-7b38-5fbb-309ae49741da"
                                    href="blog/embracing-your-inner-strength-and-achieving-greatness.html"
                                    className="small-blog-link w-inline-block">
                                    <div className="sb-blog-image"><img alt="" loading="lazy"
                                        // style="-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)"
                                        src="../cdn.prod.website-files.com/64b787e06a1ea8dedc36b707/64b78c7c42421ae3cbc7433f_blog-thumb-01.jpg"
                                        sizes="(max-width: 479px) 92vw, (max-width: 767px) 280px, 330px"
                                        srcSet="https://cdn.prod.website-files.com/64b787e06a1ea8dedc36b707/64b78c7c42421ae3cbc7433f_blog-thumb-01-p-500.jpg 500w, https://cdn.prod.website-files.com/64b787e06a1ea8dedc36b707/64b78c7c42421ae3cbc7433f_blog-thumb-01-p-800.jpg 800w, https://cdn.prod.website-files.com/64b787e06a1ea8dedc36b707/64b78c7c42421ae3cbc7433f_blog-thumb-01-p-1080.jpg 1080w, https://cdn.prod.website-files.com/64b787e06a1ea8dedc36b707/64b78c7c42421ae3cbc7433f_blog-thumb-01.jpg 1176w"
                                        className="small-blog-img" /></div>
                                    <div className="small-blog-data">
                                        <div className="blog-date">July 20, 2023</div>
                                        <h3 className="small-blog-title">Embracing Your Inner Strength and Achieving Greatness</h3>
                                        <p className="small-blog-info">Embracing your inner strength empowers you to face challenges head-on,
                                            build resilience, and live a fulfilling and meaningful life.</p>
                                    </div>
                                </a></div>
                                <div role="listitem" className="small-blog w-dyn-item"><a data-w-id="d89ac8d8-4ca0-7b38-5fbb-309ae49741da"
                                    href="blog/books-to-inspire-motivate-and-unleash-your-inner-artist.html"
                                    className="small-blog-link w-inline-block">
                                    <div className="sb-blog-image"><img alt="" loading="lazy"
                                        // style="-webkit-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)"
                                        src="../cdn.prod.website-files.com/64b787e06a1ea8dedc36b707/64b78c9a6a1ea8dedc3dde42_blog-thumb-02.jpg"
                                        sizes="(max-width: 479px) 92vw, (max-width: 767px) 280px, 330px"
                                        srcSet="https://cdn.prod.website-files.com/64b787e06a1ea8dedc36b707/64b78c9a6a1ea8dedc3dde42_blog-thumb-02-p-500.jpg 500w, https://cdn.prod.website-files.com/64b787e06a1ea8dedc36b707/64b78c9a6a1ea8dedc3dde42_blog-thumb-02-p-800.jpg 800w, https://cdn.prod.website-files.com/64b787e06a1ea8dedc36b707/64b78c9a6a1ea8dedc3dde42_blog-thumb-02-p-1080.jpg 1080w, https://cdn.prod.website-files.com/64b787e06a1ea8dedc36b707/64b78c9a6a1ea8dedc3dde42_blog-thumb-02.jpg 1176w"
                                        className="small-blog-img" /></div>
                                    <div className="small-blog-data">
                                        <div className="blog-date">July 20, 2023</div>
                                        <h3 className="small-blog-title">Books to Inspire, Motivate, and Unleash Your Inner Artist</h3>
                                        <p className="small-blog-info">our collection of books is a valuable resource for nurturing your
                                            artistic growth and expanding your creative horizons.</p>
                                    </div>
                                </a></div>
                            </div>
                        </div>
                    </div>
                    <div className="right-btn-wrap"><a data-w-id="8e80fa9d-d505-249e-4d2d-7c058082d7bd" href="blog.html"
                        className="primary-btn w-inline-block">
                        <div>View All</div><img
                            src="https://cdn.prod.website-files.com/6491518bb88c5c4729ea8883/64b509579ee5d800c56a7e21_ic-arrow.svg"
                            loading="eager" style={{display:"none" }}alt="Arrow" className="default-btn-arrow" /><img
                            src="https://cdn.prod.website-files.com/6491518bb88c5c4729ea8883/64b50992f5ddcd2d97e7be88_ic-arrow-white.svg"
                            loading="eager" style={{display:"none" }}alt="Arrow" className="hover-btn-arrow" />
                    </a></div>
                </div>
            </section>
            <section className="cta">
                <div className="w-layout-blockcontainer container w-container">
                    <div className="cta-wrap">
                        <h2 className="cta-title">Start Your Reading Journey Now!</h2>
                        <div className="cta-data">
                            <p className="cta-text">Subscribe for Readster&#x27;s latest news, updates, and curated content</p>
                            <div className="email-form w-form">
                                <form id="email-form" name="email-form" data-name="Email Form" method="get"
                                    data-wf-page-id="6491518bb88c5c4729ea8887" data-wf-element-id="a638bce4-bc8a-bc71-d317-8ad92718547c">
                                    <div className="email-field"><input className="email-input w-input"  name="Email"
                                        data-name="Email" placeholder="Your email address" type="email" id="Email-2" required /><input
                                            type="submit" data-wait="Please wait..." className="subscribe-btn w-button" value="Subscribe" /></div>
                                </form>
                                <div className="success-message w-form-done">
                                    <div>Thank you! Your submission has been received!</div>
                                </div>
                                <div className="error-message w-form-fail">
                                    <div>Oops! Something went wrong while submitting the form.</div>
                                </div>
                            </div>
                        </div>
                        <div className="cta-graphic"><img
                            src="https://cdn.prod.website-files.com/6491518bb88c5c4729ea8883/64b7c85ce58b2870cfc108af_cta-graphics.svg"
                            loading="lazy" alt="CTA Image" /></div>
                    </div>
                    <div className="cta-graphic-two"><img
                        src="https://cdn.prod.website-files.com/6491518bb88c5c4729ea8883/64b7c85ce0ae71f71bd01d37_cta-graphics-02.svg"
                        loading="lazy" alt="CTA Graphic" /></div>
                </div>
            </section>
        </div>
    )
}