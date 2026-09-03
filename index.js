<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">

    <!-- Required for responsive design -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <meta name="description"
        content="Responsive Web Layout - Frontend Development Project 2">

    <title>Responsive Web Layout | Project 2</title>

    <link rel="stylesheet" href="style.css">
</head>

<body>

    <!-- ================= HEADER ================= -->
    <header class="header">

        <div class="container navbar">

            <a href="#" class="logo">
                Dev<span>Flow</span>
            </a>

            <!-- Mobile Menu Button -->
            <button class="menu-btn"
                    id="menuBtn"
                    aria-label="Open navigation menu"
                    aria-expanded="false">
                ☰
            </button>

            <!-- Navigation -->
            <nav class="nav" id="nav">

                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>

            </nav>

        </div>

    </header>


    <!-- ================= MAIN ================= -->
    <main>

        <!-- HERO SECTION -->
        <section class="hero" id="home">

            <div class="container hero-content">

                <div class="hero-text">

                    <p class="subtitle">FRONTEND DEVELOPMENT PROJECT 2</p>

                    <h1>
                        Build Websites That
                        <span>Adapt Everywhere.</span>
                    </h1>

                    <p class="hero-description">
                        A modern responsive website designed using
                        mobile-first CSS, Flexbox, CSS Grid and media
                        queries.
                    </p>

                    <div class="hero-buttons">

                        <a href="#projects" class="btn primary-btn">
                            View Projects
                        </a>

                        <a href="#about" class="btn secondary-btn">
                            Learn More
                        </a>

                    </div>

                </div>


                <div class="hero-card">

                    <div class="device desktop">
                        💻
                    </div>

                    <div class="device tablet">
                        📱
                    </div>

                    <div class="device mobile">
                        📲
                    </div>

                    <h3>Responsive Design</h3>

                    <p>
                        Mobile → Tablet → Desktop
                    </p>

                </div>

            </div>

        </section>


        <!-- ================= ABOUT ================= -->
        <section class="section" id="about">

            <div class="container">

                <div class="section-heading">

                    <p class="subtitle">ABOUT THE PROJECT</p>

                    <h2>
                        Designed for Every Screen
                    </h2>

                    <p>
                        Content should behave like water. It should
                        adapt naturally to the available space instead
                        of depending on fixed dimensions.
                    </p>

                </div>


                <div class="about-grid">

                    <article class="info-card">

                        <div class="icon">📱</div>

                        <h3>Mobile First</h3>

                        <p>
                            Start with a simple mobile layout and
                            progressively enhance it for larger screens.
                        </p>

                    </article>


                    <article class="info-card">

                        <div class="icon">📐</div>

                        <h3>Flexible Layout</h3>

                        <p>
                            Use CSS Grid and Flexbox to create layouts
                            that automatically adapt to different sizes.
                        </p>

                    </article>


                    <article class="info-card">

                        <div class="icon">♿</div>

                        <h3>Accessible</h3>

                        <p>
                            Create usable interfaces with readable text,
                            keyboard navigation and touch-friendly controls.
                        </p>

                    </article>

                </div>

            </div>

        </section>


        <!-- ================= SERVICES ================= -->
        <section class="section services" id="services">

            <div class="container">

                <div class="section-heading">

                    <p class="subtitle">KEY CONCEPTS</p>

                    <h2>Responsive Web Techniques</h2>

                </div>


                <div class="services-grid">

                    <article class="service-card">

                        <span class="number">01</span>

                        <h3>Media Queries</h3>

                        <p>
                            Change layouts based on available screen
                            width using CSS media queries.
                        </p>

                        <code>
                            @media (min-width: 768px)
                        </code>

                    </article>


                    <article class="service-card">

                        <span class="number">02</span>

                        <h3>Flexbox</h3>

                        <p>
                            Flexbox is useful for one-dimensional layouts
                            such as navigation bars and card components.
                        </p>

                        <code>
                            display: flex;
                        </code>

                    </article>


                    <article class="service-card">

                        <span class="number">03</span>

                        <h3>CSS Grid</h3>

                        <p>
                            Grid is useful for two-dimensional page
                            layouts involving rows and columns.
                        </p>

                        <code>
                            display: grid;
                        </code>

                    </article>


                    <article class="service-card">

                        <span class="number">04</span>

                        <h3>Fluid Typography</h3>

                        <p>
                            Use clamp() to make text smoothly scale
                            between minimum and maximum sizes.
                        </p>

                        <code>
                            font-size: clamp();
                        </code>

                    </article>

                </div>

            </div>

        </section>


        <!-- ================= PROJECTS ================= -->
        <section class="section" id="projects">

            <div class="container">

                <div class="section-heading">

                    <p class="subtitle">OUR WORK</p>

                    <h2>Responsive Projects</h2>

                </div>


                <!-- CSS Grid -->
                <div class="projects-grid">

                    <article class="project-card">

                        <div class="project-image">
                            🌐
                        </div>

                        <div class="project-content">

                            <h3>Responsive Website</h3>

                            <p>
                                A website that automatically adapts
                                to mobile, tablet and desktop screens.
                            </p>

                            <a href="#" class="project-link">
                                View Project →
                            </a>

                        </div>

                    </article>


                    <article class="project-card">

                        <div class="project-image">
                            🎨
                        </div>

                        <div class="project-content">

                            <h3>Modern UI</h3>

                            <p>
                                Clean interface using modern CSS
                                layout techniques.
                            </p>

                            <a href="#" class="project-link">
                                View Project →
                            </a>

                        </div>

                    </article>


                    <article class="project-card">

                        <div class="project-image">
                            🚀
                        </div>

                        <div class="project-content">

                            <h3>Future Ready</h3>

                            <p>
                                Flexible components designed to work
                                across different screen sizes.
                            </p>

                            <a href="#" class="project-link">
                                View Project →
                            </a>

                        </div>

                    </article>

                </div>

            </div>

        </section>


        <!-- ================= RESPONSIVE DEMO ================= -->
        <section class="section demo-section">

            <div class="container">

                <div class="section-heading">

                    <p class="subtitle">RESPONSIVE DEMO</p>

                    <h2>Grid + Flexbox</h2>

                    <p>
                        This section demonstrates the combination of
                        CSS Grid for the overall layout and Flexbox
                        for individual components.
                    </p>

                </div>


                <div class="demo-layout">

                    <aside class="sidebar">

                        <h3>Sidebar</h3>

                        <ul>
                            <li>Dashboard</li>
                            <li>Profile</li>
                            <li>Projects</li>
                            <li>Settings</li>
                        </ul>

                    </aside>


                    <div class="main-content">

                        <div class="content-header">

                            <h3>Latest Projects</h3>

                            <button class="small-btn">
                                Add Project
                            </button>

                        </div>


                        <div class="mini-cards">

                            <div class="mini-card">
                                <span>💻</span>
                                <h4>Website</h4>
                                <p>Responsive UI</p>
                            </div>

                            <div class="mini-card">
                                <span>📱</span>
                                <h4>Mobile</h4>
                                <p>Mobile First</p>
                            </div>

                            <div class="mini-card">
                                <span>🎯</span>
                                <h4>Design</h4>
                                <p>User Friendly</p>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>


        <!-- ================= CONTACT ================= -->
        <section class="section contact" id="contact">

            <div class="container contact-box">

                <div>

                    <p class="subtitle">GET STARTED</p>

                    <h2>
                        Ready to Build Something Responsive?
                    </h2>

                    <p>
                        Practice responsive design and create websites
                        that look great everywhere.
                    </p>

                </div>

                <a href="mailto:example@gmail.com"
                   class="btn primary-btn">
                    Contact Us
                </a>

            </div>

        </section>

    </main>


    <!-- ================= FOOTER ================= -->
    <footer class="footer">

        <div class="container footer-content">

            <div>

                <a href="#" class="logo">
                    Dev<span>Flow</span>
                </a>

                <p>
                    Responsive Web Layout — Frontend Project 2
                </p>

            </div>


            <div class="footer-links">

                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>

            </div>

        </div>


        <div class="copyright">

            <p>
                © 2026 DevFlow. Built for Frontend Development Project 2.
            </p>

        </div>

    </footer>


    <script src="script.js"></script>

</body>

</html>
