**ezcarrentals deployment steps**

*Step 1:* Access aws via ssh using pem file.
You can download pem from EC2 instance.

  ssh -i key.pem ubuntu@ec2-35-173-248-65.compute-1.amazonaws.com

  
*Step 2*: Clone modified project from git.

  cd /home/ubuntu
  git clone <project>


*Step 3*: Restart gunicorn and nginx.

  sudo systemctl daemon-reload
  
  sudo systemctl restart gunicorn
  
  sudo systemctl restart nginx

        

