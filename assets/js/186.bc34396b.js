(window.webpackJsonp=window.webpackJsonp||[]).push([[186],{470:function(e,r,t){"use strict";t.r(r);var a=t(43),s=Object(a.a)({},function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("🔥 Make sure you "),t("a",{attrs:{href:"http://azuredev.tips?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("star the repo"),t("OutboundLink")],1),e._v(" to keep up to date with new tips and tricks.")]),e._v(" "),t("p",[e._v("💡 Learn more : "),t("a",{attrs:{href:"https://docs.microsoft.com/azure/spring-cloud/?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Spring Cloud"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("📺 Watch the video : "),t("a",{attrs:{href:"https://www.youtube.com/watch?v=_L8ez4sY67I",target:"_blank",rel:"noopener noreferrer"}},[e._v("Working with Azure Spring Cloud"),t("OutboundLink")],1),e._v(".")])]),e._v(" "),t("h4",{attrs:{id:"develop-microservice-based-apps-with-azure-spring-cloud"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#develop-microservice-based-apps-with-azure-spring-cloud","aria-hidden":"true"}},[e._v("#")]),e._v(" Develop Microservice-based apps with Azure Spring Cloud")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://docs.microsoft.com/azure/spring-cloud/spring-cloud-overview?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Spring Cloud"),t("OutboundLink")],1),e._v(" makes it easy for you to deploy and run Spring Boot-based microservice applications to Azure. By running your microservices on Azure you get the advantages of the Azure cloud, like high availability, great performance, unmatched security and more. You also get the power to easily connect your services to other Azure services, like "),t("a",{attrs:{href:"https://azure.microsoft.com/services/cosmos-db/?WT.mc_id=microsoft-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Cosmos DB"),t("OutboundLink")],1),e._v(" and "),t("a",{attrs:{href:"https://azure.microsoft.com/services/storage/?WT.mc_id=microsoft-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Storage"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("In this article, we'll get started with Azure Spring Cloud by creating a new Spring Cloud server in Azure and deploying a sample application to it.")]),e._v(" "),t("h4",{attrs:{id:"prerequisites"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites","aria-hidden":"true"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),t("p",[e._v("If you want to follow along, you'll need the following:")]),e._v(" "),t("ul",[t("li",[e._v("An Azure subscription (If you don't have an Azure subscription, create a "),t("a",{attrs:{href:"https://azure.microsoft.com/free/?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("free account"),t("OutboundLink")],1),e._v(" before you begin)")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://git-scm.com/?WT.mc_id=other-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Install Git"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://docs.microsoft.com/java/azure/jdk/?view=azure-java-stable&WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Install the Java Development Kit (JDK) 8"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://maven.apache.org/download.cgi?WT.mc_id=other-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Install Maven 3.0 or above"),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("The "),t("a",{attrs:{href:"https://docs.microsoft.com/cli/azure/?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure CLI"),t("OutboundLink")],1),e._v(". You can "),t("a",{attrs:{href:"https://docs.microsoft.com/cli/azure/install-azure-cli?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("download it for Windows, Linux or Mac"),t("OutboundLink")],1),e._v(". Or you can use the "),t("a",{attrs:{href:"https://shell.azure.com/?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Cloud Shell"),t("OutboundLink")],1)])]),e._v(" "),t("h4",{attrs:{id:"getting-started-with-azure-spring-cloud"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#getting-started-with-azure-spring-cloud","aria-hidden":"true"}},[e._v("#")]),e._v(" Getting started with Azure Spring Cloud")]),e._v(" "),t("p",[e._v("Let's get started. We'll use a sample application, that you can "),t("a",{attrs:{href:"https://github.com/Azure-Samples/PiggyMetrics?WT.mc_id=github-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("find here"),t("OutboundLink")],1),e._v(", and deploy that to a new Azure Spring Cloud service.")]),e._v(" "),t("p",[e._v("First, we'll create a new Azure Spring Cloud server:")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Go to the "),t("a",{attrs:{href:"https://portal.azure.com/?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure portal"),t("OutboundLink")],1)])]),e._v(" "),t("li",[t("p",[e._v("Click the "),t("strong",[e._v("Create a resource")]),e._v(" button (the plus-sign in the top left corner)")])]),e._v(" "),t("li",[t("p",[e._v("Search for "),t("strong",[e._v("Azure Spring Cloud")]),e._v(" and click on the result to start creating a new Azure Spring Cloud")]),e._v(" "),t("p",[e._v("a. This brings you to the "),t("strong",[e._v("create Azure Spring Cloud blade")])]),e._v(" "),t("p",[e._v("b. Select a "),t("strong",[e._v("Resource group")])]),e._v(" "),t("p",[e._v("c. Fill in a "),t("strong",[e._v("Name")]),e._v(" for the Spring Cloud")]),e._v(" "),t("p",[e._v("d. Select a "),t("strong",[e._v("Region")])]),e._v(" "),t("p",[e._v("e. Click "),t("strong",[e._v("Review and create")]),e._v(" and "),t("strong",[e._v("Create")]),e._v(" after that to create the Azure Spring Cloud server")])])]),e._v(" "),t("img",{attrs:{src:e.$withBase("/files/53springcloudcreate.png")}}),e._v(" "),t("p",[e._v("(Create new Azure Spring Cloud in the Azure portal)")]),e._v(" "),t("p",[e._v("Once the deployment is complete, we need to configure the Spring Cloud server, before we can start deploying applications to it.")]),e._v(" "),t("ol",[t("li",[e._v("In the Azure portal, open the newly created Azure Spring Cloud server")]),e._v(" "),t("li",[e._v("Go to the "),t("strong",[e._v("Config Server")]),e._v(" menu")]),e._v(" "),t("li",[e._v("Under "),t("strong",[e._v("Default repository")]),e._v(", set the "),t("strong",[e._v("URI")]),e._v(" value to https://github.com/Azure-Samples/piggymetrics and the "),t("strong",[e._v("Label")]),e._v(" value to config")]),e._v(" "),t("li",[e._v("Click "),t("strong",[e._v("Apply")])])]),e._v(" "),t("img",{attrs:{src:e.$withBase("/files/53config.png")}}),e._v(" "),t("p",[e._v("(Setup the Azure Spring Cloud configuration server in the Azure portal)")]),e._v(" "),t("p",[e._v("Let's switch to the command prompt to download and compile the application and deploy it to the Azure Spring Cloud server. Make sure that you have installed everything from the prerequisites section.")]),e._v(" "),t("p",[e._v("First, we need to install the Azure Spring Cloud extension for the Azure CLI by running the following command:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("az extension add --name spring-cloud\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("Next, run the following commands to download the code for the sample application:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("mkdir source-code\ncd source-code\ngit clone https://github.com/Azure-Samples/piggymetrics\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("p",[e._v("And now compile the code using Maven:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("cd piggymetrics\nmvn clean package -DskipTests\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("p",[e._v("The code is compiled into .JAR files that we can deploy. Sign into Azure using the Azure CLI, so that we can start creating applications:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("# Login to Azure CLI\naz login\n\n# List all subscriptions\naz account list -o table\n\n# Set active subscription\naz account set --subscription <target subscription ID>\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br")])]),t("p",[e._v("Before we start using to the Azure Spring Cloud server we should assign names to the resource group and Spring Cloud server. The Azure CLI Spring CLoud extension uses these values. Make sure to put your values into the placeholders:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("az configure --defaults group=<resource group name>\naz configure --defaults spring-cloud=<service instance name>\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("p",[e._v("Now, we can create the applications in Azure Spring Cloud. With the following code, we create apps in Azure Spring Cloud and deploy JAR files to them. This will take several minutes to complete.")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("az spring-cloud app create -n gateway\naz spring-cloud app deploy -n gateway --jar-path ./gateway/target/gateway.jar\naz spring-cloud app create -n account-service\naz spring-cloud app deploy -n account-service --jar-path ./account-service/target/account-service.jar\naz spring-cloud app create -n auth-service\naz spring-cloud app deploy -n auth-service --jar-path ./auth-service/target/auth-service.jar\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br")])]),t("p",[e._v("Let's go back to the Azure portal.")]),e._v(" "),t("ol",[t("li",[e._v("Go to the Azure Spring Cloud server")]),e._v(" "),t("li",[e._v("Click on the "),t("strong",[e._v("Apps")]),e._v(" menu. This should show three applications. These are three microservice applications that make up the solution")])]),e._v(" "),t("img",{attrs:{src:e.$withBase("/files/53apps.png")}}),e._v(" "),t("p",[e._v("(Azure Spring Cloud apps in the Azure portal)")]),e._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[e._v("Click on the "),t("strong",[e._v("gateway")]),e._v(" app. We need to assign a domain to this, so that we can access it from the internet")]),e._v(" "),t("li",[e._v("In the next screen, click on the "),t("strong",[e._v("Assign domain")]),e._v(" button. This will take a few minutes to complete")])]),e._v(" "),t("img",{attrs:{src:e.$withBase("/files/53assigngateway.png")}}),e._v(" "),t("p",[e._v("(Assign domain to Azure Spring Cloud app in the Azure portal)")]),e._v(" "),t("p",[e._v("Take the URL of the public endpoint and try it out in a browser. This should show the working application.")]),e._v(" "),t("img",{attrs:{src:e.$withBase("/files/53appworking.png")}}),e._v(" "),t("p",[e._v("(The working application in a browser)")]),e._v(" "),t("h4",{attrs:{id:"conclusion"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#conclusion","aria-hidden":"true"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),t("p",[e._v("If you are developing Spring Boot-based-services and applications, you can run them in "),t("a",{attrs:{href:"https://docs.microsoft.com/azure/spring-cloud/spring-cloud-overview?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Spring Cloud"),t("OutboundLink")],1),e._v(". Azure Spring Cloud is easy to setup, is managed by Azure, is highly available, performant and secure and enables you to connect your apps to Azure services like "),t("a",{attrs:{href:"https://azure.microsoft.com/services/cosmos-db/?WT.mc_id=microsoft-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Cosmos DB"),t("OutboundLink")],1),e._v(" and "),t("a",{attrs:{href:"https://azure.microsoft.com/services/storage/?WT.mc_id=microsoft-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Storage"),t("OutboundLink")],1),e._v(". Go and check it out!")])])},[],!1,null,null,null);r.default=s.exports}}]);