import{_ as e,c as a,o as s,a5 as t}from"./chunks/framework.BTLartk_.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{"article":"","date":"","title":"","updated":"2024-07-21T23:40:37.381+08:00"},"headers":[],"relativePath":"en/start/build.md","filePath":"en/start/build.md","lastUpdated":1735461301000}'),n={name:"en/start/build.md"},i=t(`<h1 id="deploy-application" tabindex="-1">Deploy Application <a class="header-anchor" href="#deploy-application" aria-label="Permalink to &quot;Deploy Application&quot;">​</a></h1><p>Thanks to Python&#39;s powerful cross-platform capabilities, Qexo supports deployment on various platforms. The supported deployment methods are Vercel or Docker. Local source code deployment is only recommended for advanced users.</p><p>It is worth noting that if you are using Vercel for deployment, I do not recommend using your own database, as you often cannot guarantee the connection quality with Vercel.</p><h2 id="docker-deployment" tabindex="-1">Docker Deployment <a class="header-anchor" href="#docker-deployment" aria-label="Permalink to &quot;Docker Deployment&quot;">​</a></h2><p>It is recommended to use Docker to deploy the Qexo application anywhere with one click.</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --restart=unless-stopped</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    -v</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">pwd</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/db:/app/db</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 8000:8000</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    -e</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> TIMEOUT=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">600</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    --name=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;qexo&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    abudulin/qexo:latest</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>Where <code>$(pwd)/db</code> is the data storage directory, you can change it to the desired address.</p><p>If you need the Dev branch, please pull <code>qexo:testing</code>.</p><p>Of course, you can also use docker-compose.</p><div class="language-yml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">yml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;3.8&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">services</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  qexo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">abudulin/qexo:latest</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    container_name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">qexo</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    restart</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">unless-stopped</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    ports</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;8000:8000&quot;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    environment</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      WORKERS</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      THREADS</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      TIMEOUT</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">600</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    volumes</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">./db:/app/db</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="vercel-deployment-postgresql-vercel" tabindex="-1">Vercel Deployment (PostgreSQL/Vercel) <a class="header-anchor" href="#vercel-deployment-postgresql-vercel" aria-label="Permalink to &quot;Vercel Deployment (PostgreSQL/Vercel)&quot;">​</a></h2><p>You can use the free database provided by Vercel. But please note that this is a Beta feature.</p><h3 id="one-click-deployment" tabindex="-1">One-click Deployment <a class="header-anchor" href="#one-click-deployment" aria-label="Permalink to &quot;One-click Deployment&quot;">​</a></h3><p><a href="https://vercel.com/new/clone?repository-url=https://github.com/am-abudu/Qexo" target="_blank" rel="noreferrer"><img src="https://vercel.com/button" alt="Deploy to Vercel"></a></p><p>The first deployment will report an error, please ignore it and proceed to the next steps.</p><h3 id="apply-for-vercel-database" tabindex="-1">Apply for Vercel Database <a class="header-anchor" href="#apply-for-vercel-database" aria-label="Permalink to &quot;Apply for Vercel Database&quot;">​</a></h3><p>Go to the <a href="https://vercel.com/dashboard/stores" target="_blank" rel="noreferrer">Vercel Storage page</a> and click Create Database in the upper right corner, select Postgres to create a free PostgreSQL database, and get the database connection information on the Connect page. Please note to select the region corresponding to your project in the previous step (usually Washington, D.C., USA (East) - iad1).</p><h3 id="bind-project" tabindex="-1">Bind Project <a class="header-anchor" href="#bind-project" aria-label="Permalink to &quot;Bind Project&quot;">​</a></h3><p>Select Projects in the left sidebar and click Connect Project to connect to the project you created in the first step.</p><h3 id="deployment" tabindex="-1">Deployment <a class="header-anchor" href="#deployment" aria-label="Permalink to &quot;Deployment&quot;">​</a></h3><p>Go back to your project page, click Redeploy in Deployments to start the deployment. If there is no Error message, you can open the domain to enter the initialization guide.</p><h2 id="vercel-deployment-mysql-planetscale" tabindex="-1">Vercel Deployment (MySQL/PlanetScale) <a class="header-anchor" href="#vercel-deployment-mysql-planetscale" aria-label="Permalink to &quot;Vercel Deployment (MySQL/PlanetScale)&quot;">​</a></h2><blockquote><p>The popular database platform PlanetScale has removed the free plan. Developers must pay before April 8.</p></blockquote><p>You can use the free database provided by PlanetScale.</p><h3 id="apply-for-planetscale-database" tabindex="-1">Apply for PlanetScale Database <a class="header-anchor" href="#apply-for-planetscale-database" aria-label="Permalink to &quot;Apply for PlanetScale Database&quot;">​</a></h3><p><a href="https://www.planetscale.com/" target="_blank" rel="noreferrer">Register a PlanetScale account</a> to create a free MySQL database (not supported for mainland China IPs). The region <strong>must be AWS / N. Virginia (us-east-1)</strong>, and record the database connection information.</p><h3 id="one-click-deployment-1" tabindex="-1">One-click Deployment <a class="header-anchor" href="#one-click-deployment-1" aria-label="Permalink to &quot;One-click Deployment&quot;">​</a></h3><p><a href="https://vercel.com/new/clone?repository-url=https://github.com/am-abudu/Qexo" target="_blank" rel="noreferrer"><img src="https://vercel.com/button" alt="Deploy to Vercel"></a></p><p>The first deployment will report an error, please ignore it and re-enter the project. Add environment variables in the project settings page.</p><table tabindex="0"><thead><tr><th>Name</th><th>Meaning</th><th>Example</th></tr></thead><tbody><tr><td>MYSQL_HOST</td><td>MySQL database connection address</td><td>us-east.connect.psdb.cloud</td></tr><tr><td>MYSQL_PORT</td><td>MySQL database communication port</td><td>3306</td></tr><tr><td>MYSQL_USER</td><td>MySQL database username</td><td>abudu</td></tr><tr><td>MYSQL_NAME</td><td>MySQL database name</td><td>mydatabase</td></tr><tr><td>MYSQL_PASSWORD</td><td>MySQL database password</td><td>password</td></tr><tr><td>PLANETSCALE</td><td>(Optional) Set to 1 if using PlanetScale</td><td>1</td></tr></tbody></table><p>The <code>PLANETSCALE</code> is used to disable foreign key constraints to prevent PlanetScale database deployment failures. If you are using your own database and have no special requirements, <strong>do not fill in</strong>.</p><p>Click Redeploy in Deployments to start the deployment. If there is no Error message, you can open the domain to enter the initialization guide.</p><h2 id="vercel-deployment-postgresql-supabase" tabindex="-1">Vercel Deployment (PostgreSQL/SupaBase) <a class="header-anchor" href="#vercel-deployment-postgresql-supabase" aria-label="Permalink to &quot;Vercel Deployment (PostgreSQL/SupaBase)&quot;">​</a></h2><p>You can use the free database provided by SupaBase.</p><h3 id="apply-for-supabase-database" tabindex="-1">Apply for SupaBase Database <a class="header-anchor" href="#apply-for-supabase-database" aria-label="Permalink to &quot;Apply for SupaBase Database&quot;">​</a></h3><p><a href="https://supabase.com" target="_blank" rel="noreferrer">Register a SupaBase account</a> to create a free SupaBase database. The region <strong>must be N. Virginia (us-east-1)</strong>. Get the database connection information on the project settings page. The password is the value you set.</p><h3 id="one-click-deployment-2" tabindex="-1">One-click Deployment <a class="header-anchor" href="#one-click-deployment-2" aria-label="Permalink to &quot;One-click Deployment&quot;">​</a></h3><p><a href="https://vercel.com/new/clone?repository-url=https://github.com/am-abudu/Qexo" target="_blank" rel="noreferrer"><img src="https://vercel.com/button" alt="Deploy to Vercel"></a></p><p>The first deployment will report an error, please ignore it and re-enter the project. Add environment variables in the project settings page.</p><table tabindex="0"><thead><tr><th>Name</th><th>Meaning</th><th>Example</th></tr></thead><tbody><tr><td>PG_HOST</td><td>PostgreSQL database connection address</td><td>db.xxx.supabase.co</td></tr><tr><td>PG_PORT</td><td>PostgreSQL database communication port</td><td>5432</td></tr><tr><td>PG_USER</td><td>PostgreSQL database username</td><td>postgres</td></tr><tr><td>PG_DB</td><td>PostgreSQL database name</td><td>postgres</td></tr><tr><td>PG_PASS</td><td>PostgreSQL database password</td><td>password</td></tr></tbody></table><p>Click Redeploy in Deployments to start the deployment. If there is no Error message, you can open the domain to enter the initialization guide.</p><h2 id="vercel-deployment-mongodb-not-recommended" tabindex="-1">Vercel Deployment (MongoDB/Not Recommended) <a class="header-anchor" href="#vercel-deployment-mongodb-not-recommended" aria-label="Permalink to &quot;Vercel Deployment (MongoDB/Not Recommended)&quot;">​</a></h2><p>Considering that Djongo&#39;s support for MongoDB is not perfect, it is recommended to <strong>use other databases (MySQL/PostgreSQL)</strong>.</p><h3 id="apply-for-mongodb-database" tabindex="-1">Apply for MongoDB Database <a class="header-anchor" href="#apply-for-mongodb-database" aria-label="Permalink to &quot;Apply for MongoDB Database&quot;">​</a></h3><p><a href="https://www.mongodb.com/cloud/atlas/register" target="_blank" rel="noreferrer">Register a MongoDB account</a> to create a free MongoDB database. The region <strong>must be AWS / N. Virginia (us-east-1)</strong>. Click CONNECT on the Clusters page, follow the steps to allow connections from all IP addresses, create a database user, and record the database connection information. The password is the value you set. <img src="https://s2.loli.net/2024/07/19/9axCOdNGJWUIqQ7.png" alt=""></p><h3 id="one-click-deployment-3" tabindex="-1">One-click Deployment <a class="header-anchor" href="#one-click-deployment-3" aria-label="Permalink to &quot;One-click Deployment&quot;">​</a></h3><p><a href="https://vercel.com/new/clone?repository-url=https://github.com/am-abudu/Qexo" target="_blank" rel="noreferrer"><img src="https://vercel.com/button" alt="Deploy to Vercel"></a></p><p>The first deployment will report an error, please ignore it and re-enter the project. Add environment variables in the project settings page.</p><table tabindex="0"><thead><tr><th>Name</th><th>Meaning</th><th>Example</th></tr></thead><tbody><tr><td>MONGODB_HOST</td><td>MongoDB database connection address</td><td>mongodb+srv://cluster0.xxxx.mongodb.net</td></tr><tr><td>MONGODB_PORT</td><td>MongoDB database communication port</td><td>27017</td></tr><tr><td>MONGODB_USER</td><td>MongoDB database username</td><td>abudu</td></tr><tr><td>MONGODB_DB</td><td>MongoDB database name</td><td>Cluster0</td></tr><tr><td>MONGODB_PASS</td><td>MongoDB database password</td><td>password</td></tr></tbody></table><p>Click Redeploy in Deployments to start the deployment. If there is no Error message, you can open the domain to enter the initialization guide.</p><h2 id="local-source-code-deployment-advanced" tabindex="-1">Local Source Code Deployment (Advanced) <a class="header-anchor" href="#local-source-code-deployment-advanced" aria-label="Permalink to &quot;Local Source Code Deployment (Advanced)&quot;">​</a></h2><p>Starting from version 2.0, Qexo has provided more comprehensive support for local deployment.</p><p>Due to the diversity and uncertainty of local deployment issues, the maintainers cannot guarantee effective support. General users are recommended to use Docker deployment. Source code deployment is only recommended for advanced users who need to configure the local Python3 environment by themselves.</p><p>If you want to use local deployment, please use version 2.0+ or the Dev branch.</p><h3 id="download-release" tabindex="-1">Download Release <a class="header-anchor" href="#download-release" aria-label="Permalink to &quot;Download Release&quot;">​</a></h3><p>Download the latest version <em>Source code (zip)</em> from <a href="https://github.com/am-abudu/Qexo/releases" target="_blank" rel="noreferrer">Release</a> and unzip it.</p><h3 id="prepare-database" tabindex="-1">Prepare Database <a class="header-anchor" href="#prepare-database" aria-label="Permalink to &quot;Prepare Database&quot;">​</a></h3><p>Refer to the <a href="https://docs.djangoproject.com/en/3.2/ref/databases/" target="_blank" rel="noreferrer">Django official documentation</a>.</p><table tabindex="0"><thead><tr><th>Official Support</th><th>Third-party Support</th></tr></thead><tbody><tr><td>PostgreSQL</td><td>CockroachDB</td></tr><tr><td>MariaDB</td><td>Firebird</td></tr><tr><td>MySQL</td><td>Google Cloud Spanner</td></tr><tr><td>Oracle</td><td>Microsoft SQL Server</td></tr><tr><td>SQLite</td><td>......</td></tr></tbody></table><p>Note 1: You may need to modify <code>requirement.txt</code> to install dependencies according to the database you use.</p><p>Note 2: During one-click updates, files in the directory named <code>db</code> and the file named <code>configs.py</code> will not be deleted. You should place important files (such as databases) in this folder.</p><h3 id="edit-configuration" tabindex="-1">Edit Configuration <a class="header-anchor" href="#edit-configuration" aria-label="Permalink to &quot;Edit Configuration&quot;">​</a></h3><p>Take using MySQL as an example. After confirming the installation of related dependencies, create and modify <code>configs.py</code> in the same directory as <code>manage.py</code>.</p><div class="language-python vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> pymysql</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pymysql.install_as_MySQLdb()</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">DOMAINS</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;127.0.0.1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;yoursite.com&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">DATABASES</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;default&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &#39;ENGINE&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;django.db.backends.mysql&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &#39;NAME&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;qexo&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &#39;USER&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;root&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &#39;PASSWORD&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;password&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &#39;HOST&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;127.0.0.1&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &#39;PORT&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;3306&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &#39;OPTIONS&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                &quot;init_command&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;SET sql_mode=&#39;STRICT_TRANS_TABLES&#39;&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>If you need to import other libraries or execute code in <code>init.py</code>, you can directly write <code>import pymysql</code> at the top.</p><h3 id="execute-commands-to-run" tabindex="-1">Execute Commands to Run <a class="header-anchor" href="#execute-commands-to-run" aria-label="Permalink to &quot;Execute Commands to Run&quot;">​</a></h3><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pip3</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -r</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> requirements.txt</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">python3</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> manage.py</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> makemigrations</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">python3</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> manage.py</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> migrate</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">python3</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> manage.py</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> runserver</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 0.0.0.0:8000</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --noreload</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>For a production environment, it is recommended to switch to uWSGI or Gunicorn.</p>`,68),l=[i];function r(p,o,d,h,c,k){return s(),a("div",null,l)}const b=e(n,[["render",r]]);export{m as __pageData,b as default};