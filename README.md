# CSV TMA data source for Grafana

[![CI](https://github.com/grafana/grafana-csv-datasource/workflows/CI/badge.svg)](https://github.com/grafana/grafana-csv-datasource/actions?query=workflow%3A%22CI%22)
[![Release](https://github.com/grafana/grafana-csv-datasource/workflows/Release/badge.svg)](https://github.com/grafana/grafana-csv-datasource/actions?query=workflow%3ARelease)
[![Marketplace](https://img.shields.io/badge/dynamic/json?logo=grafana&color=F47A20&label=marketplace&prefix=v&query=%24.items%5B%3F%28%40.slug%20%3D%3D%20%22marcusolsson-csv-datasource%22%29%5D.version&url=https%3A%2F%2Fgrafana.com%2Fapi%2Fplugins)](https://grafana.com/grafana/plugins/marcusolsson-csv-datasource)
[![Downloads](https://img.shields.io/badge/dynamic/json?logo=grafana&color=F47A20&label=downloads&query=%24.items%5B%3F%28%40.slug%20%3D%3D%20%22marcusolsson-csv-datasource%22%29%5D.downloads&url=https%3A%2F%2Fgrafana.com%2Fapi%2Fplugins)](https://grafana.com/grafana/plugins/marcusolsson-csv-datasource)
[![License](https://img.shields.io/github/license/grafana/grafana-csv-datasource)](LICENSE)

The Grafana CSV Datasource plugin is designed to load CSV data into Grafana, expanding your capabilities to visualize and analyze data stored in CSV (Comma-Separated Values) format. Whether you have log files, historical data, or other datasets in CSV format, this plugin streamlines the process of integrating this data into your Grafana dashboards.

## Documentation

For comprehensive instructions on setting up and configuring the Grafana CSV Datasource, please consult our official [documentation](https://grafana.github.io/grafana-csv-datasource).

## Contributing

We welcome and appreciate contributions from the open-source community to make this project better. Whether you want to report a bug, request a new feature, or submit code changes, please follow the guidelines below:

#### Reporting issues

If you encounter a bug or have a suggestion for improvement, please check our [issues](https://github.com/grafana/grafana-csv-datasource/issues) to see if a similar issue has already been reported. If not, feel free to open a new issue. When creating an issue, please provide as much detail as possible, including the version of the datasource you are using, your version of grafana and steps to reproduce the issue.

#### Requesting features

If you have an idea for a new feature or enhancement, we encourage you to create an [issue](https://github.com/grafana/grafana-csv-datasource/issues). This can help gather feedback and refine the proposal.

#### Pull requests

If you'd like to contribute code to this project, please follow these steps:

1. Fork the repository to your GitHub account.
2. Create a new branch for your feature or bug fix: `git checkout -b feature-name`.
3. Make your changes and commit them with a clear, descriptive message.
4. Push your branch to your fork: `git push origin feature-name`.
5. Create a pull request (PR) to the `main` branch of this repository. Please provide a detailed description of your changes in the PR.
6. Be prepared to address any feedback or requested changes during the review process.
7. Once your PR is approved, it will be merged, and your contribution will be part of the datasource.
