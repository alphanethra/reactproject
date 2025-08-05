{user.role === 'jobseeker' ? (
  <JobSeekerProfile userId={user._id} />
) : (
  <EmployerProfile userId={user._id} />
)}
