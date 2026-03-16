export interface GithubStats {
  stars: number;
  forks: number;
  repos: number;
  followers: number;
}

export async function fetchGithubStats(username: string): Promise<GithubStats> {
  try {
    const userResponse = await fetch(`https://api.github.com/users/${username}`);
    if (!userResponse.ok) throw new Error('Failed to fetch user data');
    const userData = await userResponse.json();

    // 간소화된 통계 (Public Repos, Followers는 기본 API에서 제공)
    // Stars는 모든 레포를 순회해야 하므로 여기서는 기본 정보 위주로 구성하거나 
    // 주요 레포의 정보를 가져오는 방식으로 확장 가능합니다.
    
    return {
      stars: 0, // 별도의 레포지토리 리스트 조회가 필요함 (추후 고도화)
      forks: 0,
      repos: userData.public_repos,
      followers: userData.followers
    };
  } catch (error) {
    console.error('Github API Error:', error);
    return { stars: 0, forks: 0, repos: 0, followers: 0 };
  }
}
