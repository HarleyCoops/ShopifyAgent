terraform {
  required_version = ">= 1.0"
}

# Configure the AWS Provider
provider "aws" {
  region = var.region
}

# Example Resource (uncomment and customize as needed)
# resource "aws_s3_bucket" "example" {
#   bucket = var.project_name
#   acl    = "private"
# }